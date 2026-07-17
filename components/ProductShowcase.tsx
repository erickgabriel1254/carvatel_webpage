"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";

export type ProductCard = {
  name: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  summary: string;
  bullets: string[];
  techSpecs?: string[];
};

type ProductShowcaseProps = {
  products: ProductCard[];
};

export function ProductShowcase({ products }: ProductShowcaseProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductCard | null>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedProduct(null);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <button
            key={product.name}
            type="button"
            onClick={() => setSelectedProduct(product)}
            className="card group overflow-hidden text-left focus-visible:outline-[#E30613]"
          >
            <div className="relative flex h-72 items-center justify-center bg-white p-7">
              <Image src={product.imageSrc} alt={product.imageAlt} width={520} height={420} className="max-h-full w-auto object-contain transition duration-300 group-hover:scale-[1.03]" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg shadow-gray-200/70">
                <p className="text-[11px] font-extrabold uppercase tracking-[.14em] text-[#E30613]">{product.category}</p>
                <div className="mt-1 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-extrabold text-gray-900">{product.name}</h3>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-red-50 text-[#E30613]">
                    <ExternalLink size={17} />
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-gray-950/65 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onClick={() => setSelectedProduct(null)}>
          <div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[28px] bg-white shadow-2xl shadow-gray-950/30" onClick={(event) => event.stopPropagation()}>
            <div className="grid gap-0 lg:grid-cols-[.9fr_1.1fr]">
              <div className="relative flex min-h-[360px] items-center justify-center bg-[linear-gradient(145deg,#fff,#f8f9fa)] p-8">
                <button type="button" onClick={() => setSelectedProduct(null)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-gray-600 shadow-lg shadow-gray-200 hover:text-[#E30613]" aria-label="Cerrar ficha de producto">
                  <X size={20} />
                </button>
                <Image src={selectedProduct.imageSrc} alt={selectedProduct.imageAlt} width={640} height={520} className="max-h-[420px] w-auto object-contain" />
              </div>

              <div className="p-7 sm:p-9">
                <p className="text-xs font-extrabold uppercase tracking-[.14em] text-[#E30613]">{selectedProduct.category}</p>
                <h3 id="product-modal-title" className="mt-2 text-3xl font-extrabold tracking-[-.03em] text-gray-900">{selectedProduct.name}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">{selectedProduct.summary}</p>

                {selectedProduct.techSpecs && (
                  <div className="mt-7 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                    <h4 className="font-extrabold text-gray-900">Ficha técnica resumida</h4>
                    <ul className="mt-4 space-y-3">
                      {selectedProduct.techSpecs.map((spec) => (
                        <li key={spec} className="flex gap-3 text-sm font-semibold leading-6 text-gray-700">
                          <Check size={17} className="mt-1 shrink-0 text-[#E30613]" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-7">
                  <h4 className="font-extrabold text-gray-900">Aplicaciones recomendadas</h4>
                  <ul className="mt-4 space-y-3">
                    {selectedProduct.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm font-semibold leading-6 text-gray-700">
                        <Check size={17} className="mt-1 shrink-0 text-[#E30613]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/#contacto" onClick={() => setSelectedProduct(null)} className="btn-primary">Consultar este equipo</Link>
                  <button type="button" onClick={() => setSelectedProduct(null)} className="btn-secondary">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
