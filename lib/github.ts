export type GithubStats = {
  publicRepos: number;
  followers: number;
  topLanguages: { name: string; percent: number }[];
};

type GithubRepo = { language: string | null; fork: boolean };

export async function getGithubStats(username: string): Promise<GithubStats> {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`, { next: { revalidate: 3600 } }),
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { next: { revalidate: 3600 } }),
  ]);
  const user = await userRes.json();
  const repos: GithubRepo[] = await reposRes.json();

  const own = repos.filter((r) => !r.fork);
  const counts = new Map<string, number>();
  for (const r of own) {
    if (r.language) counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
  }
  const total = [...counts.values()].reduce((a, b) => a + b, 0) || 1;
  const topLanguages = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name, count]) => ({ name, percent: Math.round((count / total) * 100) }));

  return { publicRepos: user.public_repos, followers: user.followers, topLanguages };
}

export type ContributionDay = { date: string; count: number };
export type ContributionsData = {
  total: number;
  currentStreak: number;
  days: ContributionDay[];
};

export async function getContributions(username: string): Promise<ContributionsData | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login: username } }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;
  const json = await res.json();
  const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) return null;

  const days: ContributionDay[] = calendar.weeks.flatMap((w: { contributionDays: { date: string; contributionCount: number }[] }) =>
    w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount }))
  );

  let currentStreak = 0;
  let startIndex = days.length - 1;

  // Si hoy (el último día) no tiene contribuciones, empieza desde ayer
  if (days[startIndex].count === 0) {
    startIndex--;
  }

  for (let i = startIndex; i >= 0; i--) {
    if (days[i].count > 0) currentStreak++;
    else break;
  }

  return { total: calendar.totalContributions, currentStreak, days };
}