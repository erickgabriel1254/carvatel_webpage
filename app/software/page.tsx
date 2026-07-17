import type { Metadata } from "next";
import { Boxes, Code2, Cpu, PackageCheck, Workflow } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InternalPage } from "@/components/InternalPage";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Software a medida, WMS y soluciones completas | Carvatel",
  description:
    "Desarrollo de software a medida, implementación de WMS, soluciones con equipos Zebra y despliegues completos según requerimientos del cliente.",
};

const solutionBlocks = [
  {
    icon: Code2,
    title: "Software a medida",
    copy: "Diseñamos sistemas a partir de los requerimientos del cliente, respetando el flujo real de trabajo y las reglas propias de cada operación.",
  },
  {
    icon: Boxes,
    title: "Implementación de WMS",
    copy: "Implementamos soluciones para gestión de bodega, inventario, recepción, picking, despacho, trazabilidad y control de ubicaciones.",
  },
  {
    icon: PackageCheck,
    title: "Soluciones llave en mano",
    copy: "Podemos entregar sistema, equipos, configuración, pruebas y acompañamiento para que la solución quede lista para operar.",
  },
  {
    icon: Cpu,
    title: "Sistema + equipos",
    copy: "Integramos software con terminales Zebra, lectores, impresoras de etiquetas y otros equipos necesarios según el proceso.",
  },
];

const methodology = [
  "Levantamiento de requerimientos y análisis del proceso actual.",
  "Diseño de flujo operativo, módulos, usuarios, permisos y reportes.",
  "Desarrollo o parametrización de la solución según necesidad.",
  "Integración con equipos de captura, impresión y trazabilidad.",
  "Pruebas, capacitación, despliegue y acompañamiento post implementación.",
];

function SoftwareExtraSections() {
  return (
    <>
      <section className="section-space bg-white">
        <div className="container-page">
          <p className="section-kicker">Soluciones completas</p>
          <h2 className="section-title">No solo entregamos software: entregamos operación lista para trabajar</h2>
          <p className="section-copy">
            Según la necesidad del cliente, Carvatel puede estructurar una solución completa que
            incluya el sistema, los equipos de captura, impresoras, configuración, capacitación y
            acompañamiento para el despliegue.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {solutionBlocks.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="card p-7">
                <span className="icon-box"><Icon size={23} /></span>
                <h3 className="mt-6 text-xl font-extrabold text-gray-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#F8F9FA]">
        <div className="container-page grid gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="section-kicker">WMS</p>
            <h2 className="section-title">Gestión de bodega, inventario y trazabilidad</h2>
            <p className="section-copy">
              Implementamos WMS para empresas que necesitan controlar entradas, salidas,
              ubicaciones, movimientos, conteos, preparación de pedidos y trazabilidad de productos.
              La solución puede integrarse con equipos Zebra para lectura de códigos e impresión de
              etiquetas.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Recepción y despacho",
              "Picking y packing",
              "Inventario cíclico",
              "Control de ubicaciones",
              "Etiquetado y códigos de barras",
              "Reportes operativos",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-gray-100 bg-white p-5 text-sm font-extrabold leading-6 text-gray-700 shadow-sm shadow-gray-200/50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-gray-900 text-white">
        <div className="container-page grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="section-kicker">Metodología</p>
            <h2 className="section-title text-white">Del requerimiento al despliegue</h2>
            <p className="section-copy text-gray-400">
              Partimos del problema real del cliente. No forzamos una herramienta genérica si el
              proceso necesita una solución específica, integración con equipos o una implementación
              por etapas.
            </p>
          </div>
          <div className="space-y-4">
            {methodology.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[.05] p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#E30613] text-sm font-extrabold text-white">
                  {index + 1}
                </span>
                <p className="self-center text-sm font-bold leading-6 text-gray-100">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Requerimientos del cliente",
              copy: "Convertimos necesidades operativas en módulos, flujos, permisos, reportes y pantallas concretas.",
            },
            {
              title: "Equipos para despliegue",
              copy: "Definimos terminales, lectores, impresoras, estaciones o accesorios requeridos para que el sistema funcione en campo.",
            },
            {
              title: "Acompañamiento técnico",
              copy: "Apoyamos pruebas, capacitación, ajustes y crecimiento de la solución después del arranque.",
            },
          ].map(({ title, copy }) => (
            <article key={title} className="card p-7">
              <span className="icon-box"><Workflow size={23} /></span>
              <h3 className="mt-6 text-xl font-extrabold text-gray-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default function SoftwarePage() {
  return (
    <>
      <Header />
      <InternalPage
        kicker="Software empresarial"
        title="Software a medida, WMS y soluciones completas para tu operación"
        intro="Desarrollamos sistemas según los requerimientos del cliente e implementamos soluciones completas que pueden incluir software, equipos, configuración y despliegue según la necesidad de cada empresa."
        badge="Soluciones digitales"
        imageSrc="/images/software-services.svg"
        imageAlt="Servicios de software empresarial, WMS, trazabilidad e integraciones"
        highlights={[
          "Desarrollo de software a medida basado en los requerimientos del cliente.",
          "Implementación de WMS para bodega, inventario, despacho y trazabilidad.",
          "Soluciones completas con sistema, equipos, configuración y despliegue.",
          "Integración con terminales Zebra, lectores, impresoras y procesos existentes.",
        ]}
        afterProducts={<SoftwareExtraSections />}
        details={[
          {
            title: "Levantamiento y diseño",
            copy: "Analizamos el proceso actual, documentamos requerimientos y diseñamos la solución alrededor de la operación real del cliente.",
          },
          {
            title: "Desarrollo e implementación",
            copy: "Construimos o parametrizamos módulos para inventario, bodega, trazabilidad, reportes, usuarios, permisos e integraciones.",
          },
          {
            title: "Despliegue con equipos",
            copy: "Integramos el sistema con equipos de captura, lectores, impresoras y estaciones necesarias para que el proyecto pueda operar.",
          },
        ]}
        useCases={[
          "WMS y gestión de bodega",
          "Control de inventario",
          "Trazabilidad de productos",
          "Gestión de activos",
          "Integración con equipos Zebra",
          "Reportes empresariales",
        ]}
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
