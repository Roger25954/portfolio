import { getGithubStats, getContributions } from "@/lib/github";
import { profile } from "@/lib/data";
import LanguageChart from "@/Components/LanguageChart";
import Heatmap from "@/Components/Heatmap";

export default async function GithubPanel() {
  const [stats, contributions] = await Promise.all([
    getGithubStats(profile.github),
    getContributions(profile.github),
  ]);

  return (
    <section id="stats" className="px-6 lg:px-14 py-16 lg:py-20 border-b border-hairline">
      <div className="text-signal font-mono text-[11.5px] uppercase tracking-wide mb-3.5 flex items-center gap-2 before:content-[''] before:w-4 before:h-px before:bg-signal">
        Actividad
      </div>
      <h2 className="font-display text-[28px] lg:text-[30px] font-semibold">GitHub en tiempo real</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-9">
        <div className="bg-panel border border-hairline rounded-lg p-5 min-w-0">
          <div className="font-mono text-2xl lg:text-[28px] font-semibold">{stats.publicRepos}</div>
          <div className="text-dim text-xs mt-1">Repositorios públicos</div>
        </div>
        <div className="bg-panel border border-hairline rounded-lg p-5 min-w-0">
          <div className="font-mono text-2xl lg:text-[28px] font-semibold">{stats.followers}</div>
          <div className="text-dim text-xs mt-1">Seguidores</div>
        </div>
        {contributions && (
          <>
            <div className="bg-panel border border-hairline rounded-lg p-5 min-w-0">
              <div className="font-mono text-2xl lg:text-[28px] font-semibold">{contributions.total}</div>
              <div className="text-dim text-xs mt-1">Contribuciones (12m)</div>
            </div>
            <div className="bg-panel border border-hairline rounded-lg p-5 min-w-0">
              <div className="font-mono text-2xl lg:text-[28px] font-semibold">{contributions.currentStreak}d</div>
              <div className="text-dim text-xs mt-1">Racha activa</div>
            </div>
          </>
        )}
      </div>

      {contributions && <Heatmap days={contributions.days} />}
      {stats.topLanguages.length > 0 && <LanguageChart data={stats.topLanguages} />}
    </section>
  );
}