import Link from "next/link";
import { company } from "@/config/company";
import { Logo } from "./Logo";

const links = [
  ["Nosotros", "/#nosotros"],
  ["Servicios", "/#servicios"],
  ["Productos Zebra", "/zebra/"],
  ["Productos Motorola", "/motorola/"],
  ["Software empresarial", "/software/"],
  ["Contacto", "/#contacto"],
];

export function Footer() {
  return (
    <footer className="bg-[#15191F] pb-8 pt-16 text-gray-400">
      <div className="container-page grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_.7fr_1fr]">
        <div><Logo footer/><p className="mt-5 text-sm font-semibold tracking-[.12em]">{company.tagline}</p><p className="mt-4 max-w-sm text-sm leading-7">Soluciones tecnológicas, soporte y equipos para empresas que necesitan seguir avanzando.</p></div>
        <div><h2 className="font-extrabold text-white">Enlaces</h2><nav className="mt-5 flex flex-col gap-3" aria-label="Enlaces del pie">{links.map(([label,href]) => <Link key={href} href={href} className="text-sm hover:text-white">{label}</Link>)}</nav></div>
        <div><h2 className="font-extrabold text-white">Contacto</h2><div className="mt-5 space-y-3 text-sm leading-6"><a href={`tel:${company.phoneHref}`} className="block hover:text-white">{company.phone}</a><a href={`mailto:${company.email}`} className="block hover:text-white">{company.email}</a><p>{company.city}</p></div></div>
      </div>
      <div className="container-page pt-7 text-xs">© {new Date().getFullYear()} Carvatel. Todos los derechos reservados.</div>
    </footer>
  );
}
