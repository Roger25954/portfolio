import { aboutParagraphs } from "@/lib/data";

export default function About() {
  return (
    <section className="px-6 md:px-14 py-16 border-t border-hairline">
      <h2 className="font-display text-2xl font-semibold mb-7">Sobre mí</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {aboutParagraphs.map((p, i) => (
          <p key={i} className="text-dim text-[15.5px] leading-relaxed">{p}</p>
        ))}
      </div>
    </section>
  );
}