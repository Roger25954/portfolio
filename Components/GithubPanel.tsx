import { getGithubStats } from "@/lib/github";
import { profile } from "@/lib/data";

export default async function GithubPanel() {
  const stats = await getGithubStats(profile.github);

  return (
    <section className="px-6 md:px-14 py-10 border-t border-hairline">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-panel border border-hairline rounded-lg p-5">
          <div className="font-mono text-2xl font-semibold">{stats.publicRepos}</div>
          <div className="text-dim text-xs mt-1">Repositorios públicos</div>
        </div>
        <div className="bg-panel border border-hairline rounded-lg p-5">
          <div className="font-mono text-2xl font-semibold">{stats.followers}</div>
          <div className="text-dim text-xs mt-1">Seguidores</div>
        </div>
        {stats.topLanguages.map((l) => (
          <div key={l.name} className="bg-panel border border-hairline rounded-lg p-5">
            <div className="font-mono text-2xl font-semibold">{l.percent}%</div>
            <div className="text-dim text-xs mt-1">{l.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}