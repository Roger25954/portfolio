"use client";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="px-6 py-20 md:px-14 md:py-28">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="text-signal font-mono text-[11.5px] uppercase tracking-wide mb-3.5">
          Portafolio & CV
        </div>
        <h1 className="font-display text-[34px] md:text-[44px] font-semibold leading-tight mb-4">
          Construyo software full-stack con{" "}
          <span className="text-signal">IA y automatización</span> integradas de raíz.
        </h1>
        <p className="text-dim text-[16.5px] max-w-[520px] mb-8">
          Full Stack Developer y estudiante de Ingeniería en IA y Ciencia de Datos en CUGDL.
        </p>
        <div className="flex gap-3">
          <a href="#projects" className="bg-signal text-white font-mono text-[13px] px-5 py-3 rounded-lg">Ver proyectos →</a>
          <a href="#contact" className="border border-hairline font-mono text-[13px] px-5 py-3 rounded-lg">Contacto</a>
        </div>
      </motion.div>
    </section>
  );
}