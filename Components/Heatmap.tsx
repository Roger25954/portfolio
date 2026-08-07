import { ContributionDay } from "@/lib/github";

function levelColor(count: number) {
  if (count === 0) return "var(--color-panel-2)";
  if (count <= 2) return "#7C5CFF2a";
  if (count <= 5) return "#7C5CFF66";
  return "#7C5CFF";
}

export default function Heatmap({ days }: { days: ContributionDay[] }) {
  const lastDays = days.slice(-182); // últimos ~26 semanas

  return (
    <div className="grid grid-cols-[repeat(26,1fr)] gap-[3px] mt-7">
      {lastDays.map((d) => (
        <div
          key={d.date}
          title={`${d.date}: ${d.count} contribuciones`}
          className="aspect-square rounded-[2px]"
          style={{ background: levelColor(d.count) }}
        />
      ))}
    </div>
  );
}