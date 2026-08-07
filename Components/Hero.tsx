"use client";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-6 py-16 lg:px-14 lg:py-24 border-b border-hairline grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-w-0"
      >
        <div className="text-signal font-mono text-[11.5px] uppercase tracking-wide mb-3.5 flex items-center gap-2 before:content-[''] before:w-4 before:h-px before:bg-signal">
          Portafolio & CV
        </div>
        <h1 className="font-display text-[34px] md:text-[44px] font-semibold leading-tight mb-4">
          Construyo software full-stack con{" "}
          <span className="text-signal">IA y automatización</span> integradas de raíz.
        </h1>
        <p className="text-dim text-[16.5px] max-w-[520px] mb-8">
          Full Stack Developer y estudiante de Licenciatura en IA y Ciencia de Datos en CUGDL.
          Diseño y mantengo productos en producción: desde CRMs de e-commerce hasta agentes con RAG.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="bg-signal text-white font-mono text-[13px] px-5 py-3 rounded-lg">
            Ver proyectos →
          </a>
          {/*<a href="/cv-jesus.pdf" className="border border-hairline font-mono text-[13px] px-5 py-3 rounded-lg">
            Descargar CV (PDF)
           </a> */}
          <a href="#contact" className="border border-hairline font-mono text-[13px] px-5 py-3 rounded-lg">
            Contacto
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="min-w-0 bg-panel border border-hairline rounded-xl overflow-hidden shadow-[0_20px_60px_-20px_#00000080]"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-hairline">
          <span className="w-[9px] h-[9px] rounded-full bg-[#3A4450]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#3A4450]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#3A4450]" />
          <span className="text-dim font-mono text-[11px] ml-1.5">~/jesus/status</span>
        </div>
        <div className="p-5 font-mono text-[13px]">
          <div className="text-dim mb-2.5">
            <span className="text-amber">rol</span> <span className="text-paper">→ {profile.role}</span>
          </div>
          <div className="text-dim mb-2.5">
            <span className="text-amber">foco</span> <span className="text-paper">→ {profile.focus}</span>
          </div>
          <div className="text-dim mb-2.5">
            <span className="text-amber">stack</span> <span className="text-paper">→ Next.js · Node · Python</span>
          </div>
          <div className="text-dim mb-2.5">
            <span className="text-amber">ubicación</span> <span className="text-paper">→ {profile.location}</span>
          </div>
          <div className="mt-4">
            $ <span className="inline-block w-1.5 h-3.5 bg-signal animate-blink align-middle" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}