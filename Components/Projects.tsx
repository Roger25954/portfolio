"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-14 py-16 border-t border-hairline">
      <h2 className="font-display text-2xl font-semibold mb-7">Proyectos destacados</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 2) * 0.08, duration: 0.4 }}
            className="bg-panel border border-hairline rounded-xl p-6"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-display text-lg font-semibold">{p.name}</h3>
              <span className="text-amber font-mono text-[10.5px] border border-amber/25 rounded px-2 py-0.5">{p.tag}</span>
            </div>
            <p className="text-dim text-sm mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 text-dim font-mono text-[11px]">
              {p.stack.join(" · ")}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}