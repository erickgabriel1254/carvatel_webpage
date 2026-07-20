import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { ProductShowcase, type ProductCard, type ProductFilter } from "./ProductShowcase";
import { whatsappUrl } from "@/config/company";

type DetailBlock = {
  title: string;
  copy: string;
};

type InternalPageProps = {
  kicker: string;
  title: string;
  intro: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
  products?: ProductCard[];
  productFilters?: ProductFilter[];
  afterProducts?: ReactNode;
  details: DetailBlock[];
  useCases: string[];
};

export function InternalPage({
  kicker,
  title,
  intro,
  badge,
  imageSrc,
  imageAlt,
  highlights,
  products = [],
  productFilters = [],
  afterProducts,
  details,
  useCases,
}: InternalPageProps) {
  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff_45%,#f8f9fa_100%)] py-20">
        <div className="absolute right-0 top-0 h-full w-[45%] dot-grid opacity-60" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1fr_.95fr]">
          <div>
            <p className="section-kicker">{kicker}</p>
            <h1 className="mt-4 max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] font-extrabold leading-[1] tracking-[-.06em] text-gray-900">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">{intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/#contacto" className="btn-primary">
                Solicitar asesoría <ArrowRight size={18} />
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                WhatsApp <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="card relative overflow-hidden bg-white p-5">
            <div className="absolute left-6 top-6 z-10 rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-[.13em] text-[#E30613] shadow-lg shadow-gray-200/70">
              {badge}
            </div>
            <Image src={imageSrc} alt={imageAlt} width={900} height={620} className="mx-auto max-h-[460px] w-auto max-w-full rounded-[22px] object-contain" priority />
          </div>
        </div>
      </section>

      {products.length > 0 && (
        <section className="section-space bg-[#F8F9FA]">
          <div className="container-page">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="section-kicker">Productos destacados</p>
                <h2 className="section-title">Equipos para distintos escenarios de operación</h2>
              </div>
              <Link href="/#contacto" className="btn-secondary self-start">Consultar disponibilidad</Link>
            </div>
            <ProductShowcase products={products} filters={productFilters} />
          </div>
        </section>
      )}

      {afterProducts}

      <section className="section-space bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="section-kicker">Enfoque</p>
            <h2 className="section-title">Soluciones pensadas para operación real</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#E30613] text-white">
                  <Check size={16} />
                </span>
                <p className="text-sm font-bold leading-6 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#F8F9FA]">
        <div className="container-page">
          <p className="section-kicker">Qué ofrecemos</p>
          <h2 className="section-title">Acompañamiento completo para tu empresa</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {details.map((detail, index) => (
              <article key={detail.title} className="card p-7">
                <span className="text-4xl font-extrabold text-red-100">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-extrabold text-gray-900">{detail.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{detail.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-gray-900 text-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="section-kicker">Aplicaciones</p>
            <h2 className="section-title text-white">Dónde aporta valor</h2>
            <p className="section-copy text-gray-400">
              Estas soluciones se adaptan a equipos de trabajo que necesitan más control,
              continuidad y trazabilidad en sus procesos diarios.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[.05] p-5 text-sm font-bold leading-6 text-gray-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
