import type { Metadata } from "next";
import Image from "next/image";
import { Database, RadioTower, ShieldCheck, Video } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InternalPage } from "@/components/InternalPage";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Radios y bodycams Hytera en Ecuador | Carvatel",
  description:
    "Radios PoC, radios analógicos, radios digitales DMR, bodycams Hytera, HyTalk y gestión de evidencia DEM para comunicación empresarial en Ecuador.",
};

const softwareHighlights = [
  {
    icon: RadioTower,
    title: "HyTalk PoC",
    copy: "Comunicación push-to-talk por redes LTE, 4G/5G y Wi-Fi, con despacho web, voz, video, mensajería y ubicación.",
  },
  {
    icon: Video,
    title: "Video y despacho",
    copy: "Opciones para visualización en campo, asistencia remota, transmisión de video y coordinación desde centro de control.",
  },
  {
    icon: Database,
    title: "DEM / IDS",
    copy: "Gestión centralizada de evidencia digital, recolección desde bodycams, búsqueda, reproducción, etiquetas, permisos y auditoría.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad de evidencia",
    copy: "Control de accesos, trazabilidad, cifrado y administración de evidencias para mantener integridad del ciclo de vida del archivo.",
  },
];

function HyteraExtraSections() {
  return (
    <>
      <section className="section-space bg-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div className="card flex min-h-[360px] items-center justify-center overflow-hidden p-5">
            <Image src="/images/hytera/hytalk.jpg" alt="Hytera HyTalk" width={760} height={620} className="h-auto max-h-[420px] w-auto object-contain" />
          </div>
          <div>
            <p className="section-kicker">HyTalk</p>
            <h2 className="section-title">Push-to-talk, despacho y video sobre red celular</h2>
            <p className="section-copy">
              HyTalk es la plataforma PoC de Hytera para comunicación de equipos sobre redes LTE,
              4G/5G y Wi-Fi. Funciona como una solución de despacho y comunicación tipo radio,
              sumando voz, video, mensajería, posicionamiento, grabaciones y administración centralizada.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Comunicación PTT para usuarios distribuidos sin depender solo de infraestructura de radio tradicional.",
                "Despacho web para coordinar grupos, usuarios, ubicación y operación en campo.",
                "Compatible con radios PoC y equipos broadband Hytera según implementación.",
                "Útil para seguridad, logística, transporte, retail, industria y supervisión.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm font-bold leading-6 text-gray-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#F8F9FA]">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="section-kicker">DEM / IDS</p>
            <h2 className="section-title">Gestión de evidencia digital para bodycams Hytera</h2>
            <p className="section-copy">
              Hytera cuenta con soluciones de Digital Evidence Management (DEM) e Integrated
              Docking Software / Station (IDS) para recolectar, almacenar, revisar y administrar
              audio, video, fotos y otros archivos generados por cámaras corporales.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {softwareHighlights.map(({ icon: Icon, title, copy }) => (
                <article key={title} className="rounded-2xl border border-gray-100 bg-white p-5">
                  <span className="icon-box"><Icon size={21} /></span>
                  <h3 className="mt-4 font-extrabold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-gray-600">{copy}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="card overflow-hidden p-5">
            <Image src="/images/hytera/ids.jpg" alt="Hytera Integrated Device Station para gestión de evidencia" width={860} height={520} className="h-auto w-full rounded-[22px] object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}

export default function HyteraPage() {
  return (
    <>
      <Header />
      <InternalPage
        kicker="Productos Hytera"
        title="Comunicación y evidencia digital con tecnología Hytera"
        intro="Integramos radios PoC, radios analógicos, radios digitales DMR, bodycams y plataformas Hytera para equipos que necesitan comunicación clara, operación simple y soporte de evidencia en campo."
        badge="Línea Hytera"
        imageSrc="/images/hytera/hytera-logo.png"
        imageAlt="Logo Hytera"
        highlights={[
          "Radios PoC para comunicación por redes 4G/LTE y Wi-Fi.",
          "Radios analógicos y digitales para operación empresarial diaria.",
          "Bodycams para registro de evidencia, seguridad y trazabilidad.",
          "Plataformas HyTalk, DEM e IDS para despacho, video y gestión de evidencia.",
          "Asesoría para seleccionar equipos según cobertura, uso y necesidad operativa.",
        ]}
        productFilters={[
          {
            id: "poc",
            label: "Radios PoC",
            description: "Equipos Push-to-Talk over Cellular para comunicación amplia usando red celular y Wi-Fi.",
          },
          {
            id: "radios",
            label: "Radios",
            description: "Radios portátiles analógicos o digitales para comunicación local por canales y grupos de trabajo.",
          },
          {
            id: "bodycams",
            label: "Bodycams",
            description: "Cámaras corporales Hytera para captura de evidencia, supervisión y seguridad en campo.",
          },
        ]}
        products={[
          {
            name: "Hytera PNC360S",
            category: "Radio PoC LTE",
            filterId: "poc",
            imageSrc: "/images/hytera/pnc360s.jpg",
            imageAlt: "Radio PoC Hytera PNC360S",
            summary: "Radio PoC compacto para comunicación push-to-talk sobre redes 4G/LTE y Wi-Fi, ideal para equipos distribuidos que necesitan cobertura amplia.",
            techSpecs: [
              "Comunicación Push-to-Talk over Cellular sobre red móvil y Wi-Fi.",
              "Batería de 4,000 mAh para jornadas extensas.",
              "Pantalla TFT de 1.77 pulgadas y operación compacta con una mano.",
              "Protección IP67 y estándar MIL-STD-810H para uso exigente.",
            ],
            bullets: [
              "Operaciones con personal distribuido en distintas zonas.",
              "Seguridad, logística, rutas, supervisión y trabajo en campo.",
              "Empresas que necesitan comunicación tipo radio sin infraestructura propia.",
            ],
          },
          {
            name: "Hytera AP516",
            category: "Radio analógico",
            filterId: "radios",
            imageSrc: "/images/hytera/ap516.jpg",
            imageAlt: "Radio analógico Hytera AP516",
            summary: "Radio portátil analógico para comunicación empresarial sencilla, con audio potente, batería de larga duración y carga USB tipo C.",
            techSpecs: [
              "Radio analógico con capacidad de 32 canales.",
              "Batería de 4,000 mAh con duración aproximada de hasta 17 horas.",
              "Altavoz de 3 W y cancelación de ruido para audio más claro.",
              "Protección IP54 contra polvo y agua.",
            ],
            bullets: [
              "Bodegas, comercios, seguridad, mantenimiento y operación interna.",
              "Equipos que necesitan comunicación simple por canales.",
              "Escenarios donde se prioriza facilidad de uso y autonomía.",
            ],
          },
          {
            name: "Hytera BD506",
            category: "Radio digital DMR",
            filterId: "radios",
            imageSrc: "/images/hytera/bd506-uhf.jpg",
            imageAlt: "Radio digital Hytera BD506",
            summary: "Radio digital comercial DMR para empresas que buscan migrar de comunicación analógica a digital con una opción resistente y práctica.",
            techSpecs: [
              "Operación analógica y digital para migración gradual.",
              "Capacidad de 48 canales y 3 zonas.",
              "Bandas UHF 400-470 MHz o VHF 136-174 MHz según versión.",
              "Protección IP54 y cumplimiento MIL-STD-810G.",
            ],
            bullets: [
              "Operaciones que desean mejorar audio y orden de comunicación.",
              "Empresas que combinan radios analógicos y digitales.",
              "Seguridad, industria, logística y coordinación diaria.",
            ],
          },
          {
            name: "Hytera GC550",
            category: "Bodycam 2K",
            filterId: "bodycams",
            imageSrc: "/images/hytera/gc550.png",
            imageAlt: "Bodycam Hytera GC550",
            summary: "Bodycam compacta 2K para capturar evidencia clara en campo, con diseño liviano y operación rápida mediante control físico de grabación.",
            techSpecs: [
              "Grabación de video en resolución 2K.",
              "Diseño ultra compacto con peso menor a 120 g.",
              "Ángulo amplio de captura para registrar más contexto del evento.",
              "Protección IP67 y cifrado AES-256 según configuración.",
            ],
            bullets: [
              "Seguridad privada, supervisión, atención en campo y control operativo.",
              "Registro de incidentes con evidencia audiovisual.",
              "Equipos que necesitan bodycams livianas para uso prolongado.",
            ],
          },
          {
            name: "Hytera SC580",
            category: "Bodycam 4G",
            filterId: "bodycams",
            imageSrc: "/images/hytera/sc580.jpg",
            imageAlt: "Bodycam Hytera SC580",
            summary: "Bodycam inteligente 4G para seguridad y operación en campo, con funciones de video, comunicación y transmisión según implementación.",
            techSpecs: [
              "Bodycam 4G con funciones de Push-to-Talk over Cellular.",
              "Peso aproximado de 158 g y pantalla de 2 pulgadas.",
              "Wi-Fi, Bluetooth y posicionamiento GPS/BDS/GLONASS/A-GPS.",
              "Protección IP68 para trabajo en condiciones exigentes.",
            ],
            bullets: [
              "Operaciones que requieren evidencia y comunicación desde el mismo equipo.",
              "Seguridad, patrullaje, supervisión y respuesta en campo.",
              "Proyectos donde se necesita visibilidad operativa y registro audiovisual.",
            ],
          },
        ]}
        afterProducts={<HyteraExtraSections />}
        details={[
          {
            title: "Radios PoC",
            copy: "Comunicación tipo radio usando red celular o Wi-Fi para equipos distribuidos, rutas, supervisores y personal fuera de instalaciones.",
          },
          {
            title: "Radios analógicos y digitales",
            copy: "Equipos para comunicación local por canales, con opciones para operación simple o migración hacia tecnología digital DMR.",
          },
          {
            title: "Bodycams",
            copy: "Cámaras corporales para capturar evidencia, reforzar seguridad, documentar eventos y mejorar trazabilidad operativa.",
          },
        ]}
        useCases={[
          "Seguridad privada",
          "Logística y distribución",
          "Operaciones en campo",
          "Centros comerciales",
          "Industria y mantenimiento",
          "Supervisión y evidencia",
        ]}
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
