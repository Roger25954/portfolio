import { stackGroups } from "@/lib/data";

export default function Stack() {
  return (
    <section className="px-6 md:px-14 py-16 border-t border-hairline">
      <h2 className="font-display text-2xl font-semibold mb-7">Stack técnico</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
        {stackGroups.map((group) => (
          <div key={group.label}>
            <h4 className="text-amber font-mono text-xs uppercase mb-3">{group.label}</h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="border border-hairline text-dim font-mono text-xs px-2.5 py-1.5 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}