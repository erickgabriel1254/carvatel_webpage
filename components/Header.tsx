"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  ["Inicio", "#inicio"], ["Nosotros", "#nosotros"], ["Servicios", "#servicios"],
  ["Soluciones", "#soluciones"], ["Equipos", "#equipos"], ["Contacto", "#contacto"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-lg">
      <div className="container-page flex h-[78px] items-center justify-between gap-6">
        <a href="#inicio" aria-label="Ir al inicio"><Logo /></a>
        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm font-bold text-gray-600 hover:text-[#E30613]">{label}</a>)}
        </nav>
        <a href="#contacto" className="btn-primary min-h-11 px-5 text-sm max-sm:!hidden">Contáctanos</a>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border border-gray-200 lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Navegación móvil" className="border-t border-gray-100 bg-white px-5 py-5 lg:hidden">
          <div className="container-page flex flex-col gap-1">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-bold text-gray-700 hover:bg-red-50 hover:text-[#E30613]">{label}</a>)}
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary mt-3 sm:!hidden">Contáctanos</a>
          </div>
        </nav>
      )}
    </header>
  );
}
