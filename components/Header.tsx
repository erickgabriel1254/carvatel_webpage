"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  ["Inicio", "/"],
  ["Nosotros", "/#nosotros"],
  ["Software", "/software/"],
  ["Contacto", "/#contacto"],
] as const;

const productLinks = [
  ["Productos Zebra", "/zebra/"],
  ["Productos Motorola", "/motorola/"],
  ["Productos Hytera", "/hytera/"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-lg">
      <div className="container-page flex h-[85px] items-center justify-between gap-6">
        <Link href="/" aria-label="Ir al inicio"><Logo /></Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {links.slice(0, 2).map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-bold text-gray-600 hover:text-[#E30613]">{label}</Link>
          ))}

          <div className="group relative">
            <button type="button" className="flex items-center gap-1.5 text-sm font-bold text-gray-600 hover:text-[#E30613]">
              Productos <ChevronDown size={15} />
            </button>
            <div className="invisible absolute left-1/2 top-full min-w-56 -translate-x-1/2 pt-4 opacity-0 group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl shadow-gray-200/70">
                {productLinks.map(([label, href]) => (
                  <Link key={href} href={href} className="block rounded-xl px-4 py-3 text-sm font-extrabold text-gray-700 hover:bg-red-50 hover:text-[#E30613]">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {links.slice(2).map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-bold text-gray-600 hover:text-[#E30613]">{label}</Link>
          ))}
        </nav>

        <Link href="/#contacto" className="btn-primary min-h-11 px-5 text-sm max-sm:!hidden">Contáctanos</Link>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border border-gray-200 lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav aria-label="Navegación móvil" className="border-t border-gray-100 bg-white px-5 py-5 lg:hidden">
          <div className="container-page flex flex-col gap-1">
            {links.slice(0, 2).map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-bold text-gray-700 hover:bg-red-50 hover:text-[#E30613]">{label}</Link>
            ))}
            <p className="px-3 pt-4 text-xs font-extrabold uppercase tracking-[.14em] text-gray-400">Productos</p>
            {productLinks.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-bold text-gray-700 hover:bg-red-50 hover:text-[#E30613]">{label}</Link>
            ))}
            {links.slice(2).map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-bold text-gray-700 hover:bg-red-50 hover:text-[#E30613]">{label}</Link>
            ))}
            <Link href="/#contacto" onClick={() => setOpen(false)} className="btn-primary mt-3 sm:!hidden">Contáctanos</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
