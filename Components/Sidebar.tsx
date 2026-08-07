import { profile, navItems } from "@/lib/data";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col md:gap-10 md:sticky md:top-0 md:h-screen md:w-[260px] px-6 py-8 border-r border-hairline bg-panel">
      <div className="flex items-center gap-2.5">
        <div className="w-[34px] h-[34px] rounded-lg bg-signal flex items-center justify-center font-mono text-sm font-semibold text-white">
          JC
        </div>
        <div>
          <div className="text-sm font-semibold">{profile.name}</div>
          <div className="font-mono text-[11px] text-dim">Full Stack · AI/Data</div>
        </div>
      </div>

      <nav className="flex flex-col gap-0.5">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-mono text-[13.5px] text-dim hover:text-paper hover:bg-panel-2 rounded-md px-3 py-2.5 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-2.5">
        <div className="flex items-center gap-2 font-mono text-[11px] text-dim border border-hairline rounded-lg px-2.5 py-2">
          <span className="w-[7px] h-[7px] rounded-full bg-amber animate-pulse-dot" />
          Disponible para trabajar
        </div>
        <div className="font-mono text-[11px] text-dim border border-hairline rounded-lg px-2.5 py-2">
          📍 {profile.location}
        </div>
      </div>
    </aside>
  );
}