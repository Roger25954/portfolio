import { aboutParagraphs } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-14 py-16 border-t border-hairline">
      <div className="text-signal font-mono text-[11.5px] uppercase tracking-wide mb-3.5 flex items-center gap-2 before:content-[''] before:w-4 before:h-px before:bg-signal">
        Perfil
      </div>
      <h2 className="font-display text-2xl font-semibold mb-7">Sobre mí</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {aboutParagraphs.map((p, i) => (
          <p key={i} className="text-dim text-[15.5px] leading-relaxed">{p}</p>
        ))}
      </div>
    </section>
  );
}