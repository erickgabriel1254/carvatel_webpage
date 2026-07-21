import Link from "next/link";
import { ArrowUpRight, Barcode, Boxes, Code2, Radio, Settings, ShieldCheck, Wrench } from "lucide-react";

const services = [
  { icon: Wrench, title: "Servicio técnico Zebra", href: "/zebra/", copy: "Soporte, revisión y mantenimiento de equipos Zebra utilizados en logística, inventario, puntos de atención y procesos de trazabilidad." },
  { icon: Radio, title: "Servicio técnico Motorola", href: "/motorola/", copy: "Soporte técnico para radios Motorola, enfocado en mantener la comunicación operativa de equipos de trabajo y áreas críticas." },
  { icon: Barcode, title: "Venta de equipos Zebra", href: "/zebra/", copy: "Asesoría y venta de equipos Zebra para identificación, captura de datos, movilidad y control de procesos empresariales." },
  { icon: Boxes, title: "Venta de radios Motorola", href: "/motorola/", copy: "Venta de radios y equipos Motorola para comunicación empresarial, coordinación operativa y trabajo en campo." },
  { icon: ShieldCheck, title: "Venta de equipos Hytera", href: "/hytera/", copy: "Radios PoC, radios analógicos, equipos DMR y bodycams Hytera para comunicación y evidencia en campo." },
  { icon: Code2, title: "Software, WMS y soluciones completas", href: "/software/", copy: "Desarrollo a medida, implementación de WMS e integración de sistema con equipos según los requerimientos de cada operación." },
  { icon: Settings, title: "Asesoría tecnológica", href: "/#contacto", copy: "Acompañamiento técnico para seleccionar equipos, soluciones y herramientas adecuadas a las necesidades reales de cada empresa." },
];

export function Services() {
  return (
    <section id="servicios" className="section-space bg-[#F8F9FA]">
      <div className="container-page">
        <p className="section-kicker">Lo que hacemos</p><h2 className="section-title">Servicios que mantienen tu operación en movimiento</h2><p className="section-copy">Integramos soporte, equipos y soluciones digitales con una mirada práctica sobre los procesos de tu empresa.</p>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, href, copy }, index) => <article key={title} className="group card relative overflow-hidden p-7"><span className="absolute right-5 top-4 text-4xl font-extrabold text-gray-100">0{index + 1}</span><span className="icon-box"><Icon size={23}/></span><h3 className="mt-7 text-lg font-extrabold text-gray-900 group-hover:text-[#E30613]">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p><Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#E30613] hover:text-[#B8000D]">Ver más <ArrowUpRight size={16}/></Link></article>)}
        </div>
      </div>
    </section>
  );
}
