import { Check, Gauge, Workflow } from "lucide-react";

const benefits = ["Mejor control de procesos", "Mayor continuidad operativa", "Reducción de errores manuales", "Comunicación más eficiente", "Equipos adecuados para entornos empresariales", "Información más organizada y trazable"];

export function Solutions() {
  return (
    <section id="soluciones" className="section-space overflow-hidden bg-gray-900 text-white">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div><p className="section-kicker">Soluciones</p><h2 className="section-title text-white">Tecnología aplicada a la operación de tu empresa</h2><p className="section-copy text-gray-400">Combinamos soporte técnico, equipos empresariales y soluciones digitales para ayudarte a mejorar la operación, reducir errores y tomar mejores decisiones.</p><div className="mt-9 flex gap-4"><span className="icon-box"><Workflow size={23}/></span><span className="icon-box"><Gauge size={23}/></span></div></div>
        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => <div key={benefit} className="flex min-h-[94px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[.05] p-5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#E30613]"><Check size={17}/></span><p className="text-sm font-bold leading-6 text-gray-200">{benefit}</p></div>)}
        </div>
      </div>
    </section>
  );
}
