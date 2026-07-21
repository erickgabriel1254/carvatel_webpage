import Link from "next/link";
import { ArrowUpRight, Barcode, Check, Radio, ShieldCheck } from "lucide-react";

const equipment = [
  {
    icon: Barcode,
    label: "Línea de equipos",
    title: "Equipos Zebra",
    href: "/zebra/",
    items: ["Lectores de códigos de barras", "Terminales móviles", "Impresoras empresariales", "Identificación y trazabilidad"],
  },
  {
    icon: Radio,
    label: "Comunicación empresarial",
    title: "Equipos Motorola",
    href: "/motorola/",
    items: ["Radios de comunicación", "Accesorios para radios", "Comunicación operativa", "Soluciones para trabajo en campo"],
  },
  {
    icon: ShieldCheck,
    label: "Comunicación y evidencia",
    title: "Equipos Hytera",
    href: "/hytera/",
    items: ["Radios PoC", "Radios analógicos", "Radios digitales DMR", "Bodycams para evidencia"],
  },
];

export function Equipment() {
  return (
    <section id="equipos" className="section-space bg-white">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">Equipos</p><h2 className="section-title">Tecnología preparada para el trabajo real</h2></div><Link href="/#contacto" className="btn-secondary self-start">Consultar disponibilidad <ArrowUpRight size={18}/></Link></div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {equipment.map(({ icon: Icon, label, title, href, items }) => <article key={title} className="card grid gap-7 p-7 sm:grid-cols-[170px_1fr] sm:p-9"><div className="flex min-h-[180px] items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#FEE2E2,#fff)]"><div className="grid h-24 w-24 place-items-center rounded-[28px] bg-white text-[#E30613] shadow-xl shadow-red-100"><Icon size={45} strokeWidth={1.6}/></div></div><div><p className="text-xs font-extrabold uppercase tracking-[.14em] text-[#E30613]">{label}</p><h3 className="mt-2 text-2xl font-extrabold">{title}</h3><ul className="mt-5 space-y-3">{items.map(item => <li key={item} className="flex items-center gap-3 text-sm font-semibold text-gray-600"><Check size={17} className="text-[#E30613]"/>{item}</li>)}</ul><Link href={href} className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#E30613] hover:text-[#B8000D]">Ver detalles <ArrowUpRight size={16}/></Link></div></article>)}
        </div>
      </div>
    </section>
  );
}
