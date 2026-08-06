import { Mail, ExternalLink } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-14 py-20 border-t border-hairline text-center">
      <h2 className="font-display text-3xl font-semibold mb-3">¿Hablamos?</h2>
      <p className="text-dim mb-8">Abierto a oportunidades como Full Stack Developer.</p>
      <div className="flex justify-center gap-4">
        <a href={`mailto:${profile.email}`} className="flex items-center gap-2 border border-hairline font-mono text-[13px] px-5 py-3 rounded-lg">
          <Mail size={15} /> Email
        </a>
        <a href={profile.githubUrl} target="_blank" className="flex items-center gap-2 border border-hairline font-mono text-[13px] px-5 py-3 rounded-lg">
          <ExternalLink size={15} /> GitHub
        </a>
      </div>
    </section>
  );
}