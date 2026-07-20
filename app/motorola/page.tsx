import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, RadioTower, Signal, Workflow } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InternalPage } from "@/components/InternalPage";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Radios Motorola en Ecuador | Carvatel",
  description:
    "Radios Motorola, Wave PTX, alquiler de frecuencias, estudios de ingeniería de frecuencias y soporte técnico para comunicación empresarial en Ecuador.",
};

const radioServices = [
  {
    icon: RadioTower,
    title: "Alquiler de frecuencias para radios",
    copy: "Acompañamos a empresas que necesitan operar radios con una solución de frecuencia ordenada, documentada y alineada con su operación diaria.",
  },
  {
    icon: Signal,
    title: "Estudios de ingeniería de frecuencias",
    copy: "Evaluamos cobertura, ubicación, interferencias, necesidades de canalización y condiciones técnicas para diseñar una comunicación más estable.",
  },
  {
    icon: Workflow,
    title: "Integración radio + broadband",
    copy: "Combinamos radios MOTOTRBO y soluciones Wave PTX para conectar equipos por radio tradicional, red celular o Wi-Fi según el escenario.",
  },
];

function MotorolaExtraSections() {
  return (
    <>
      <section className="section-space bg-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div className="card overflow-hidden p-5">
            <Image src="/images/motorola/waveptx.jpg" alt="Motorola Wave PTX" width={760} height={520} className="h-auto w-full rounded-[22px] object-cover" />
          </div>
          <div>
            <p className="section-kicker">Wave PTX</p>
            <h2 className="section-title">Push-to-talk por banda ancha para equipos distribuidos</h2>
            <p className="section-copy">
              Wave PTX es una solución de comunicación PTT de Motorola Solutions que permite hablar
              al instante usando redes de datos como LTE, 4G/5G o Wi-Fi. Es útil cuando el equipo
              necesita cobertura más allá del alcance de una red de radio tradicional.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Comunicación inmediata tipo radio desde dispositivos compatibles.",
                "Conecta usuarios en campo, oficina, vehículos y distintas ciudades.",
                "Compatible con equipos TLK y aplicaciones móviles según implementación.",
                "Ideal para seguridad, logística, transporte y operaciones remotas.",
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
        <div className="container-page">
          <p className="section-kicker">Frecuencias</p>
          <h2 className="section-title">Servicios para una red de radio bien planificada</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {radioServices.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="card p-7">
                <span className="icon-box"><Icon size={23} /></span>
                <h3 className="mt-6 text-xl font-extrabold text-gray-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page grid items-center gap-10 rounded-[32px] border border-gray-100 bg-[linear-gradient(135deg,#fff,#f8f9fa)] p-8 shadow-xl shadow-gray-200/50 lg:grid-cols-[.8fr_1.2fr]">
          <div className="flex justify-center">
            <Image src="/images/motorola/certificados-motorola.jpeg" alt="Certificados Motorola dealer certificado y servicio autorizado" width={360} height={180} className="h-auto max-w-full rounded-2xl shadow-lg shadow-gray-200" />
          </div>
          <div>
            <p className="section-kicker">Certificación</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em] text-gray-900">Respaldo Motorola para venta y servicio</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
              Carvatel cuenta con respaldo comercial y técnico para acompañar proyectos de
              comunicación Motorola, desde la selección de equipos hasta soporte, configuración y
              mantenimiento.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm font-extrabold text-gray-700">
              <BadgeCheck className="text-[#E30613]" size={22} />
              Dealer certificado y servicio autorizado
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function MotorolaPage() {
  return (
    <>
      <Header />
      <InternalPage
        kicker="Productos Motorola"
        title="Comunicación confiable para equipos en campo"
        intro="Integramos radios Motorola, soluciones Wave PTX y servicios de ingeniería de frecuencia para empresas que necesitan comunicación estable y bien planificada."
        badge="Comunicación empresarial"
        imageSrc="/images/motorola/motorola-logo.svg"
        imageAlt="Logo Motorola Solutions"
        highlights={[
          "Radios y accesorios para comunicación empresarial.",
          "Alquiler de frecuencias y estudios de ingeniería de frecuencias.",
          "Soporte técnico, programación y acompañamiento operativo.",
          "Soluciones orientadas a seguridad, logística, industria y campo.",
        ]}
        productFilters={[
          {
            id: "portatiles",
            label: "Radios portátiles",
            description: "Equipos de mano para personal en campo, seguridad, bodega, industria y coordinación diaria.",
          },
          {
            id: "moviles",
            label: "Radios móviles",
            description: "Radios para vehículos, bases, flotas y centros de coordinación operativa.",
          },
          {
            id: "bodycams",
            label: "Bodycams",
            description: "Cámaras corporales Motorola para evidencia en campo, seguridad privada, operación crítica y supervisión.",
          },
        ]}
        products={[
          {
            name: "MOTOTRBO R7",
            category: "Radio digital profesional",
            filterId: "portatiles",
            imageSrc: "/images/products/motorola-r7.png",
            imageAlt: "Radio Motorola MOTOTRBO R7",
            summary: "Radio digital robusto para ambientes exigentes donde la claridad de audio, la resistencia y la continuidad de comunicación son críticas.",
            techSpecs: [
              "Radio digital DMR de la familia MOTOTRBO.",
              "Audio avanzado con supresión de ruido para ambientes exigentes.",
              "Clasificación IP68 para resistencia a polvo e inmersión.",
              "Opciones de conectividad y servicios según configuración.",
            ],
            bullets: [
              "Seguridad, industria, logística y operaciones con ruido ambiental.",
              "Equipos que requieren comunicación clara y alta disponibilidad.",
              "Operaciones con accesorios profesionales de audio y energía.",
            ],
          },
          {
            name: "MOTOTRBO R7 con pantalla",
            category: "Radio digital con interfaz",
            filterId: "portatiles",
            imageSrc: "/images/products/motorola-r7-display.png",
            imageAlt: "Radio Motorola MOTOTRBO R7 con pantalla",
            summary: "Versión con pantalla y teclado para equipos que necesitan más control, identificación de llamadas y operación avanzada en campo.",
            techSpecs: [
              "Pantalla QVGA de 2.4 pulgadas en configuraciones con display.",
              "Teclado para navegación, grupos y funciones avanzadas.",
              "Audio avanzado e IP68 como parte de la familia R7.",
              "Compatible con accesorios profesionales de comunicación.",
            ],
            bullets: [
              "Supervisión, coordinación y comunicación por grupos.",
              "Operaciones que necesitan ver estado, canal o información de llamada.",
              "Ambientes críticos donde claridad de audio y resistencia importan.",
            ],
          },
          {
            name: "MOTOTRBO R5",
            category: "Radio digital profesional",
            filterId: "portatiles",
            imageSrc: "/images/motorola/r5.webp",
            imageAlt: "Radio Motorola MOTOTRBO R5",
            summary: "Radio portátil MOTOTRBO para comunicación profesional, pensado para equipos que requieren audio claro, resistencia y operación diaria.",
            techSpecs: [
              "Radio digital DMR para operación empresarial.",
              "Formato portátil para personal en movimiento.",
              "Enfoque en audio claro y resistencia para trabajo diario.",
              "Compatible con accesorios profesionales según configuración.",
            ],
            bullets: [
              "Seguridad, logística, industria y coordinación operativa.",
              "Usuarios que necesitan un radio profesional para turnos diarios.",
              "Operaciones que requieren comunicación confiable y sencilla.",
            ],
          },
          {
            name: "MOTOTRBO R2",
            category: "Radio digital empresarial",
            filterId: "portatiles",
            imageSrc: "/images/products/motorola-r2.png",
            imageAlt: "Radio Motorola MOTOTRBO R2",
            summary: "Radio de trabajo diario pensado para comunicación confiable, manejo sencillo y operación continua en empresas, campo, logística o industria.",
            techSpecs: [
              "Radio digital MOTOTRBO para operación diaria.",
              "Clasificación IP55 para resistencia a polvo y chorros de agua.",
              "Audio configurable y reducción de ruido.",
              "Formato delgado con batería de alta capacidad según versión.",
            ],
            bullets: [
              "Comunicación empresarial en campo, logística e industria.",
              "Usuarios que necesitan equipo simple, resistente y confiable.",
              "Operaciones con turnos largos y comunicación frecuente.",
            ],
          },
          {
            name: "Motorola DEP250",
            category: "Radio portátil MOTOTRBO",
            filterId: "portatiles",
            imageSrc: "/images/motorola/dep250.jpg",
            imageAlt: "Radio Motorola DEP250",
            summary: "Radio portátil MOTOTRBO para empresas que necesitan comunicación clara, sencilla y compatible con operaciones analógicas o digitales.",
            techSpecs: [
              "Modo dual analógico/digital para compatibilidad con flotas existentes.",
              "Tecnología digital con mejor rendimiento de audio frente a radios analógicos.",
              "Clasificación IP54 para resistencia a polvo y agua.",
              "Funciones como anuncio de voz y mensajes de texto preprogramados según configuración.",
            ],
            bullets: [
              "Operaciones que están migrando de analógico a digital.",
              "Seguridad, bodega, industria, comercio y coordinación en sitio.",
              "Equipos que necesitan comunicación práctica con manejo sencillo.",
            ],
          },
          {
            name: "Motorola DEP550e",
            category: "Radio portátil MOTOTRBO",
            filterId: "portatiles",
            imageSrc: "/images/motorola/dep550e.jpeg",
            imageAlt: "Radio Motorola DEP550e",
            summary: "Radio portátil digital de la serie DEP 500e para comunicaciones empresariales con audio claro, conectividad y resistencia para operación diaria.",
            techSpecs: [
              "Radio digital MOTOTRBO con operación analógica/digital según configuración.",
              "Opciones de conectividad como Wi-Fi y Bluetooth en la familia DEP 500e.",
              "Batería de larga duración para turnos extendidos.",
              "Diseño resistente para uso profesional en campo, seguridad e industria.",
            ],
            bullets: [
              "Equipos operativos que necesitan radios portátiles profesionales.",
              "Migración de flotas analógicas a comunicación digital MOTOTRBO.",
              "Seguridad, industria, logística, mantenimiento y coordinación de personal.",
            ],
          },
          {
            name: "Motorola DEP570e",
            category: "Radio portátil con pantalla",
            filterId: "portatiles",
            imageSrc: "/images/motorola/dep570e.jpg",
            imageAlt: "Radio Motorola DEP570e",
            summary: "Radio portátil MOTOTRBO de la serie DEP 500e con pantalla e interfaz para usuarios que requieren mayor control de comunicación.",
            techSpecs: [
              "Radio digital MOTOTRBO para redes convencionales o sistemas ampliados según implementación.",
              "Pantalla e interfaz para navegación, estado y operación por grupos.",
              "Opciones de conectividad inalámbrica y actualizaciones por aire según configuración.",
              "Mayor resistencia al agua en la familia DEP 500e, con enfoque de uso profesional.",
            ],
            bullets: [
              "Supervisores y coordinadores que necesitan ver información del radio.",
              "Operaciones con grupos, canales y flujos de comunicación definidos.",
              "Ambientes donde se requiere audio claro, resistencia y administración de flota.",
            ],
          },
          {
            name: "Motorola RVA50",
            category: "Radio empresarial en sitio",
            filterId: "portatiles",
            imageSrc: "/images/motorola/motorola-rva50.jpg",
            imageAlt: "Radio Motorola RVA50",
            summary: "Radio de dos vías para uso empresarial en sitio, pensado para mejorar la coordinación de equipos de trabajo en operaciones diarias.",
            techSpecs: [
              "Radio portátil para comunicación empresarial en sitio.",
              "Diseño robusto para uso diario en entornos comerciales y operativos.",
              "Operación simple por canales para comunicación entre grupos de trabajo.",
              "Compatible con accesorios de audio y carga según disponibilidad.",
            ],
            bullets: [
              "Tiendas, bodegas, seguridad, administración y coordinación interna.",
              "Equipos que necesitan comunicación rápida sin una red compleja.",
              "Operaciones donde la simplicidad y continuidad son prioridad.",
            ],
          },
          {
            name: "Motorola VB400",
            category: "Bodycam profesional",
            filterId: "bodycams",
            imageSrc: "/images/motorola/vb400.png",
            imageAlt: "Cámara corporal Motorola VB400",
            summary: "Cámara corporal para seguridad y operación en campo, diseñada para capturar video desde la perspectiva del usuario y fortalecer evidencia, trazabilidad y control.",
            techSpecs: [
              "Grabación Full HD 1080p.",
              "Funciones de pre y post grabación para conservar contexto del evento.",
              "Conectividad Bluetooth y Wi-Fi para administración y operación.",
              "Cifrado, GPS y opciones de montaje para distintos uniformes según configuración.",
            ],
            bullets: [
              "Seguridad privada, centros comerciales, campus, salud e industria.",
              "Registro de incidentes y soporte de evidencia audiovisual.",
              "Equipos que necesitan mayor transparencia y trazabilidad en campo.",
            ],
          },
          {
            name: "Motorola V500",
            category: "Bodycam LTE",
            filterId: "bodycams",
            imageSrc: "/images/motorola/v500.jpg",
            imageAlt: "Cámara corporal Motorola V500",
            summary: "Cámara corporal conectada por LTE para equipos que requieren video, ubicación en vivo y gestión remota desde centro de control.",
            techSpecs: [
              "Conectividad LTE para transmisión de video y ubicación en vivo.",
              "Descarga de evidencia por red móvil para agilizar flujos posteriores al evento.",
              "Administración remota y mantenimiento sobre redes móviles.",
              "Diseñada para aportar inteligencia de campo en tiempo real.",
            ],
            bullets: [
              "Operaciones críticas donde el centro de control necesita visibilidad en vivo.",
              "Seguridad, emergencias, supervisión y respuesta en campo.",
              "Equipos que requieren evidencia digital con flujo de gestión más ágil.",
            ],
          },
          {
            name: "Motorola TLK 110",
            category: "Radio Wave PTX",
            filterId: "portatiles",
            imageSrc: "/images/motorola/tlk110.webp",
            imageAlt: "Radio Motorola TLK 110 Wave PTX",
            summary: "Dispositivo PTT por banda ancha para equipos que necesitan comunicación instantánea usando red celular o Wi-Fi, sin depender únicamente de cobertura de radio tradicional.",
            techSpecs: [
              "Equipo diseñado para Wave PTX.",
              "Comunicación push-to-talk sobre redes de datos.",
              "Uso en campo con cobertura celular o Wi-Fi disponible.",
              "Adecuado para flotas distribuidas y equipos móviles.",
            ],
            bullets: [
              "Operaciones distribuidas en varias zonas o ciudades.",
              "Equipos que necesitan comunicación rápida sin infraestructura propia de radio.",
              "Seguridad, logística, transporte y trabajo en campo.",
            ],
          },
          {
            name: "Motorola TLK 150",
            category: "Radio vehicular Wave PTX",
            filterId: "moviles",
            imageSrc: "/images/motorola/tlk150.png",
            imageAlt: "Radio vehicular Motorola TLK 150 Wave PTX",
            summary: "Equipo vehicular Wave PTX para comunicación push-to-talk en flotas, transporte, logística y coordinación móvil.",
            techSpecs: [
              "Solución vehicular para Wave PTX.",
              "Comunicación PTT sobre banda ancha.",
              "Pensado para instalación en vehículos o unidades móviles.",
              "Conexión de equipos de campo con supervisión y despacho.",
            ],
            bullets: [
              "Flotas, transporte, logística y unidades móviles.",
              "Comunicación entre vehículos, supervisores y equipos de campo.",
              "Operaciones donde se necesita cobertura amplia por red de datos.",
            ],
          },
          {
            name: "Motorola DEM 300",
            category: "Radio móvil",
            filterId: "moviles",
            imageSrc: "/images/motorola/dem300.webp",
            imageAlt: "Radio móvil Motorola DEM 300",
            summary: "Radio móvil para instalación en vehículo o estación, útil cuando se necesita comunicación estable desde una unidad fija o móvil.",
            techSpecs: [
              "Radio móvil para operación vehicular o base.",
              "Uso en VHF/UHF según configuración disponible.",
              "Pensado para comunicación de flotas y coordinación operativa.",
              "Programación según canales y necesidades de la empresa.",
            ],
            bullets: [
              "Vehículos de operación, seguridad, logística y mantenimiento.",
              "Puntos fijos donde se requiere radio de mayor presencia.",
              "Redes de comunicación con canales definidos.",
            ],
          },
          {
            name: "Motorola DEM 400",
            category: "Radio móvil",
            filterId: "moviles",
            imageSrc: "/images/motorola/dem400.webp",
            imageAlt: "Radio móvil Motorola DEM 400",
            summary: "Radio móvil para comunicaciones empresariales que requieren coordinación desde vehículos, bases operativas o centros de control.",
            techSpecs: [
              "Radio móvil para instalación en vehículo o base.",
              "Operación por canales programables.",
              "Compatible con escenarios de flota y supervisión.",
              "Configuración según cobertura y frecuencia autorizada.",
            ],
            bullets: [
              "Coordinación vehicular y operación de campo.",
              "Supervisión desde bases, garitas o centros operativos.",
              "Empresas que requieren comunicación ordenada por canales.",
            ],
          },
          {
            name: "Motorola DEM 500",
            category: "Radio móvil",
            filterId: "moviles",
            imageSrc: "/images/motorola/dem500.jpg",
            imageAlt: "Radio móvil Motorola DEM 500",
            summary: "Radio móvil orientado a flotas y operaciones donde la comunicación desde vehículo o base es parte central del proceso.",
            techSpecs: [
              "Radio móvil profesional.",
              "Uso en vehículos, bases o puestos de coordinación.",
              "Programación de canales según operación.",
              "Integrable dentro de redes de radio empresariales.",
            ],
            bullets: [
              "Flotas de transporte, logística y seguridad.",
              "Operaciones con supervisión permanente.",
              "Comunicación entre equipos móviles y puntos fijos.",
            ],
          },
          {
            name: "Motorola DGM 500e",
            category: "Radio móvil digital",
            filterId: "moviles",
            imageSrc: "/images/motorola/dgm500e.webp",
            imageAlt: "Radio móvil Motorola DGM 500e",
            summary: "Radio móvil digital para empresas que necesitan una red MOTOTRBO con comunicación clara, canales definidos y operación profesional.",
            techSpecs: [
              "Radio móvil digital MOTOTRBO.",
              "Uso para vehículos o estaciones base.",
              "Comunicación por canales y grupos de trabajo.",
              "Configuración según red, cobertura y necesidades operativas.",
            ],
            bullets: [
              "Flotas empresariales, seguridad y logística.",
              "Operaciones que migran de analógico a digital.",
              "Coordinación móvil con mejor orden de comunicación.",
            ],
          },
          {
            name: "Motorola DGM 5500e",
            category: "Radio móvil digital",
            filterId: "moviles",
            imageSrc: "/images/motorola/dgm5500e.jpg",
            imageAlt: "Radio móvil Motorola DGM 5500e",
            summary: "Equipo móvil digital de la serie MOTOTRBO para comunicación profesional en flotas, bases y operaciones empresariales.",
            techSpecs: [
              "Radio móvil digital de la serie MOTOTRBO.",
              "Interfaz orientada a operación profesional.",
              "Uso en redes de radio con grupos y canales definidos.",
              "Opciones de configuración para flotas y centros operativos.",
            ],
            bullets: [
              "Transporte, industria, logística y seguridad.",
              "Equipos que necesitan coordinación desde vehículos.",
              "Redes donde se requiere audio claro y operación disciplinada.",
            ],
          },
          {
            name: "Motorola DGM 8000e",
            category: "Radio móvil digital avanzado",
            filterId: "moviles",
            imageSrc: "/images/motorola/dgm8000e.jpg",
            imageAlt: "Radio móvil Motorola DGM 8000e",
            summary: "Radio móvil digital avanzado para redes empresariales con mayor exigencia de coordinación, control y continuidad operativa.",
            techSpecs: [
              "Radio móvil digital MOTOTRBO de gama avanzada.",
              "Uso para flotas, bases y centros de despacho.",
              "Configuración según red, canales y operación.",
              "Enfoque en comunicaciones críticas empresariales.",
            ],
            bullets: [
              "Operaciones industriales y logísticas complejas.",
              "Centros de control y coordinación de flotas.",
              "Empresas que necesitan una red de radio más robusta.",
            ],
          },
          {
            name: "Motorola DGM 8500e",
            category: "Radio móvil digital avanzado",
            filterId: "moviles",
            imageSrc: "/images/motorola/dgm8500e.jpg",
            imageAlt: "Radio móvil Motorola DGM 8500e",
            summary: "Radio móvil digital avanzado para operación profesional, supervisión y comunicación de flotas con requerimientos exigentes.",
            techSpecs: [
              "Radio móvil digital MOTOTRBO de gama avanzada.",
              "Pensado para comunicaciones empresariales críticas.",
              "Uso en vehículos, bases o centros operativos.",
              "Programación y configuración según diseño de red.",
            ],
            bullets: [
              "Flotas críticas, seguridad, transporte e industria.",
              "Operaciones que requieren mayor control de comunicación.",
              "Proyectos con diseño técnico de frecuencia y cobertura.",
            ],
          },
          {
            name: "Motorola TALKABOUT T470",
            category: "Radio portátil para uso ligero",
            filterId: "portatiles",
            imageSrc: "/images/products/motorola-t470.jpeg",
            imageAlt: "Radio Motorola TALKABOUT T470",
            summary: "Walkie-talkie orientado a actividades, coordinación ligera y entornos donde se necesita comunicación sencilla sin infraestructura compleja.",
            techSpecs: [
              "Radio portátil de uso ligero de la familia TALKABOUT.",
              "Comunicación simple entre usuarios sin infraestructura compleja.",
              "Uso recomendado sujeto a alcance real, entorno y normativa local.",
              "Enfoque en coordinación ocasional o actividades de baja criticidad.",
            ],
            bullets: [
              "Coordinación de eventos, actividades y comunicación ocasional.",
              "Escenarios donde no se requiere red profesional MOTOTRBO.",
              "Usuarios que buscan comunicación sencilla y portable.",
            ],
          },
        ]}
        afterProducts={<MotorolaExtraSections />}
        details={[
          {
            title: "Radios y Wave PTX",
            copy: "Equipos Motorola para coordinar áreas operativas, personal en campo, flotas, bases y usuarios distribuidos mediante radio o banda ancha.",
          },
          {
            title: "Frecuencias y cobertura",
            copy: "Alquiler de frecuencias, estudios de ingeniería de frecuencias y recomendaciones técnicas para diseñar una comunicación estable.",
          },
          {
            title: "Soporte y mantenimiento",
            copy: "Revisión técnica, programación, configuración y soporte para mantener la comunicación activa y reducir interrupciones operativas.",
          },
        ]}
        useCases={[
          "Seguridad privada",
          "Operaciones industriales",
          "Logística y transporte",
          "Centros comerciales",
          "Eventos y coordinación",
          "Trabajo en campo",
        ]}
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
