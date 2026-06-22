import { ArrowUpRight } from "lucide-react";
import { company } from "@/config/company";

export function Location() {
  return (
    <section className="section-space bg-white">
      <div className="container-page grid overflow-hidden rounded-[28px] border border-gray-200 bg-gray-900 text-white shadow-2xl shadow-gray-200 lg:grid-cols-[.7fr_1.3fr]">
        <div className="p-8 sm:p-12">
          <p className="section-kicker">Ubicación</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight">Visítanos en Quito</h2>
          <p className="mt-5 leading-7 text-gray-400">{company.address}</p>
          <a href={company.googleMapsUrl} target="_blank" rel="noreferrer" className="btn-primary mt-8">
            Abrir en Google Maps <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="min-h-[330px] bg-[#F8F9FA]">
          <iframe
            src={company.googleMapsEmbedUrl}
            title="Mapa de ubicación de Carvatel"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-[330px] w-full border-0 lg:h-full"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
