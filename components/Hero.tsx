import { ArrowRight, Barcode, Code2, Headphones, Radio, ShieldCheck, Wifi } from "lucide-react";
import { whatsappUrl } from "@/config/company";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[linear-gradient(135deg,#fff_48%,#f8f9fa_100%)] py-20 sm:py-28">
      <div className="absolute right-0 top-0 h-full w-[42%] dot-grid opacity-70" aria-hidden="true" />
      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[.14em] text-[#B8000D]">
            <span className="h-2 w-2 rounded-full bg-[#E30613]" /> Tecnología para empresas
          </div>
          <h1 className="max-w-[760px] text-[clamp(2.65rem,6vw,5.15rem)] font-extrabold leading-[.98] tracking-[-.06em] text-gray-900">
            Soporte, equipos e <span className="text-[#E30613]">innovación</span> para tu empresa
          </h1>
          <p className="mt-7 max-w-[650px] text-lg leading-8 text-gray-600">
            Ayudamos a mantener tus operaciones conectadas con soporte técnico especializado, soluciones de software y equipos empresariales Zebra y Motorola.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">Solicitar asesoría <ArrowRight size={18} /></a>
            <a href="#servicios" className="btn-secondary">Ver servicios</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-gray-500">
            <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-[#E30613]" /> Atención técnica</span>
            <span className="flex items-center gap-2"><Wifi size={18} className="text-[#E30613]" /> Continuidad operativa</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -inset-6 rounded-[42px] bg-red-100/50 blur-2xl" aria-hidden="true" />
          <div className="card relative overflow-hidden p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-gray-100 pb-5">
              <div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#E30613]">Ecosistema Carvatel</p><p className="mt-1 font-extrabold text-gray-900">Operación conectada</p></div>
              <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-500"/><span className="h-2.5 w-2.5 rounded-full bg-gray-200"/><span className="h-2.5 w-2.5 rounded-full bg-gray-200"/></div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                [Headphones, "Soporte técnico", "Respuesta especializada"],
                [Barcode, "Equipos Zebra", "Captura y trazabilidad"],
                [Radio, "Radios Motorola", "Comunicación operativa"],
                [Code2, "Software", "Procesos más eficientes"],
              ].map(([Icon, title, copy]) => {
                const IconComponent = Icon as typeof Headphones;
                return <div key={title as string} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 sm:p-5"><IconComponent className="mb-5 text-[#E30613]" size={25}/><h2 className="text-sm font-extrabold text-gray-900">{title as string}</h2><p className="mt-1 text-xs leading-5 text-gray-500">{copy as string}</p></div>;
              })}
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-gray-900 p-4 text-white"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#E30613]"><ShieldCheck size={21}/></span><div><p className="text-sm font-extrabold">Soluciones que sí encajan</p><p className="text-xs text-gray-400">Asesoría según tu operación</p></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
