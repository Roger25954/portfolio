import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="px-6 md:px-14 py-16 border-t border-hairline">
      <h2 className="font-display text-2xl font-semibold mb-7">Educación</h2>
      <div className="flex flex-col">
        {education.map((e) => (
          <div key={e.title} className="grid md:grid-cols-[140px_1fr] gap-2 md:gap-6 py-5 border-t border-hairline last:border-b">
            <div className="text-dim font-mono text-xs">{e.date}</div>
            <div>
              <h4 className="font-medium mb-1">{e.title}</h4>
              <p className="text-dim text-sm">{e.place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}