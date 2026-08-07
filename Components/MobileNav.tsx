"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/lib/data";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden sticky top-0 z-30 bg-panel border-b border-hairline">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="w-[34px] h-[34px] rounded-lg bg-signal flex items-center justify-center font-mono text-sm font-semibold text-white">
            JC
          </div>
          <span className="text-sm font-semibold">{profile.name}</span>
        </div>
        <button onClick={() => setOpen(!open)} aria-label="Abrir menú" className="text-paper p-1">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-hairline">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-dim hover:text-paper hover:bg-panel-2 px-5 py-3.5 border-b border-hairline last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}