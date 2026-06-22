import { Barcode, Boxes, Code2, Radio, Settings, Wrench } from "lucide-react";

const services = [
  { icon: Wrench, title: "Servicio técnico Zebra", copy: "Soporte, revisión y mantenimiento de equipos Zebra utilizados en logística, inventario, puntos de atención y procesos de trazabilidad." },
  { icon: Radio, title: "Servicio técnico Motorola", copy: "Soporte técnico para radios Motorola, enfocado en mantener la comunicación operativa de equipos de trabajo y áreas críticas." },
  { icon: Barcode, title: "Venta de equipos Zebra", copy: "Asesoría y venta de equipos Zebra para identificación, captura de datos, movilidad y control de procesos empresariales." },
  { icon: Boxes, title: "Venta de radios Motorola", copy: "Venta de radios y equipos Motorola para comunicación empresarial, coordinación operativa y trabajo en campo." },
  { icon: Code2, title: "Software empresarial", copy: "Desarrollo e implementación de soluciones para mejorar el control de procesos, centralizar información y optimizar la gestión." },
  { icon: Settings, title: "Asesoría tecnológica", copy: "Acompañamiento técnico para seleccionar equipos, soluciones y herramientas adecuadas a las necesidades reales de cada empresa." },
];

export function Services() {
  return (
    <section id="servicios" className="section-space bg-[#F8F9FA]">
      <div className="container-page">
        <p className="section-kicker">Lo que hacemos</p><h2 className="section-title">Servicios que mantienen tu operación en movimiento</h2><p className="section-copy">Integramos soporte, equipos y soluciones digitales con una mirada práctica sobre los procesos de tu empresa.</p>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, copy }, index) => <article key={title} className="group card relative overflow-hidden p-7"><span className="absolute right-5 top-4 text-4xl font-extrabold text-gray-100">0{index + 1}</span><span className="icon-box"><Icon size={23}/></span><h3 className="mt-7 text-lg font-extrabold text-gray-900 group-hover:text-[#E30613]">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p></article>)}
        </div>
      </div>
    </section>
  );
}
