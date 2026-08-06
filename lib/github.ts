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