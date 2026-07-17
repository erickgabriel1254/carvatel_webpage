import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InternalPage } from "@/components/InternalPage";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Productos Zebra en Ecuador | Carvatel",
  description:
    "Equipos Zebra, lectores de códigos de barras, impresoras, terminales móviles, tablets empresariales y soporte técnico autorizado Zebra en Ecuador.",
};

export default function ZebraPage() {
  return (
    <>
      <Header />
      <InternalPage
        kicker="Productos Zebra"
        title="Captura, impresión y trazabilidad con tecnología Zebra"
        intro="Carvatel acompaña a empresas que necesitan identificar productos, controlar inventarios, imprimir etiquetas y mantener sus equipos Zebra operativos con soporte especializado."
        badge="Centro autorizado Zebra"
        imageSrc="/images/products/zebra-logo.svg"
        imageAlt="Logo Zebra"
        highlights={[
          "Único Centro de Servicio Autorizado Zebra en Ecuador.",
          "Más de 30 años de experiencia en soluciones empresariales.",
          "Asesoría para seleccionar lectores, impresoras, tablets y terminales según tu proceso.",
          "Soporte técnico para mantener la continuidad operativa de tus equipos.",
        ]}
        products={[
          {
            name: "Zebra TC15",
            category: "Computador móvil",
            imageSrc: "/images/products/TC15.jpg",
            imageAlt: "Computador móvil Zebra TC15",
            summary: "Terminal móvil empresarial para captura de datos, aplicaciones Android y operación diaria con una inversión controlada.",
            techSpecs: [
              "Formato handheld tipo smartphone empresarial.",
              "Captura 1D/2D según configuración del lector.",
              "Conectividad inalámbrica para aplicaciones de inventario, despacho y campo.",
              "Compatible con accesorios empresariales y administración de dispositivos.",
            ],
            bullets: [
              "Inventario, ventas en campo, reparto y registro de información.",
              "Procesos que necesitan movilidad sin depender de equipos de consumo.",
              "Integración con soluciones de trazabilidad y atención móvil.",
            ],
          },
          {
            name: "Zebra TC26",
            category: "Computador móvil",
            imageSrc: "/images/products/zebra-tc26.jpg",
            imageAlt: "Computador móvil Zebra TC26",
            summary: "Equipo móvil para captura de datos en rutas, inventario, atención en campo y operaciones que requieren conectividad dentro y fuera de la empresa.",
            techSpecs: [
              "Pantalla de 5 pulgadas.",
              "Conectividad Wi-Fi, Bluetooth y celular según versión.",
              "Opciones de batería estándar o extendida.",
              "Lectura de códigos 1D/2D según motor de escaneo configurado.",
            ],
            bullets: [
              "Entrega directa, comunicación de personal, rutas y ticketing.",
              "Operaciones de campo que requieren captura y consulta de datos.",
              "Empresas que necesitan reemplazar teléfonos por equipos empresariales.",
            ],
          },
          {
            name: "Zebra TC27",
            category: "Computador móvil",
            imageSrc: "/images/products/TC27.jpg",
            imageAlt: "Computador móvil Zebra TC27",
            summary: "Nueva generación de la familia TC2x para operaciones móviles que requieren conectividad, lectura de códigos y trabajo fuera de oficina.",
            techSpecs: [
              "Equipo Android empresarial de nueva generación.",
              "Opciones de conectividad para movilidad en campo.",
              "Escaneo 1D/2D según configuración.",
              "Ecosistema Zebra para accesorios, administración y soporte.",
            ],
            bullets: [
              "Rutas, ventas, entregas, servicio técnico y atención en campo.",
              "Modernización de equipos TC2x anteriores.",
              "Operaciones que necesitan movilidad con soporte empresarial.",
            ],
          },
          {
            name: "Zebra TC53",
            category: "Computador móvil avanzado",
            imageSrc: "/images/products/zebra-tc53.jpg",
            imageAlt: "Computador móvil Zebra TC53",
            summary: "Terminal robusta Wi-Fi para captura de datos dentro de instalaciones, inventario, despacho, procesamiento de órdenes y operación en bodega o retail.",
            techSpecs: [
              "Pantalla de 6 pulgadas.",
              "Conectividad Wi-Fi 6E.",
              "Motores de escaneo 1D/2D disponibles según necesidad.",
              "Diseñado para operación empresarial intensiva dentro de instalaciones.",
            ],
            bullets: [
              "Inventario, punto de venta, devoluciones y etiquetado de precios.",
              "Bodegas, tiendas, centros de atención y operación interna.",
              "Procesos que requieren captura rápida y aplicaciones empresariales.",
            ],
          },
          {
            name: "Zebra TC78",
            category: "Computador móvil premium",
            imageSrc: "/images/products/TC78.jpg",
            imageAlt: "Computador móvil Zebra TC78",
            summary: "Equipo de alto desempeño para equipos de campo que necesitan captura avanzada, comunicación móvil y continuidad operativa.",
            techSpecs: [
              "Familia premium para movilidad empresarial.",
              "Opciones de conectividad avanzada para campo.",
              "Captura de códigos 1D/2D y uso con aplicaciones corporativas.",
              "Diseño orientado a jornadas exigentes y administración centralizada.",
            ],
            bullets: [
              "Logística, transporte, field service y operaciones móviles exigentes.",
              "Equipos que trabajan fuera de instalaciones.",
              "Procesos que combinan lectura, comunicación y consulta de sistemas.",
            ],
          },
          {
            name: "Zebra ET40",
            category: "Tablet empresarial",
            imageSrc: "/images/products/ET40.jpg",
            imageAlt: "Tablet empresarial Zebra ET40",
            summary: "Tablet empresarial para trabajo dentro de instalaciones, atención, inventario, aplicaciones operativas y digitalización de procesos.",
            techSpecs: [
              "Tablet Android empresarial de la serie ET4x.",
              "Diseño resistente para uso corporativo diario.",
              "Opciones de captura, accesorios y administración empresarial.",
              "Pantalla amplia para formularios, consultas y aplicaciones internas.",
            ],
            bullets: [
              "Reemplazo de formularios manuales o tablets de consumo.",
              "Retail, bodegas, atención al cliente y supervisión operativa.",
              "Procesos que necesitan más pantalla que un handheld.",
            ],
          },
          {
            name: "Zebra ET45",
            category: "Tablet empresarial móvil",
            imageSrc: "/images/products/ET45.jpg",
            imageAlt: "Tablet empresarial Zebra ET45",
            summary: "Tablet para equipos que necesitan movilidad dentro y fuera de la empresa, con enfoque en datos, operación y aplicaciones corporativas.",
            techSpecs: [
              "Tablet empresarial de la serie ET4x con enfoque móvil.",
              "Opciones de conectividad para trabajo fuera de instalaciones.",
              "Compatible con accesorios corporativos.",
              "Adecuada para aplicaciones de campo, supervisión y consulta de datos.",
            ],
            bullets: [
              "Trabajo en campo, rutas, supervisión y atención móvil.",
              "Captura de información y consulta de sistemas desde pantalla amplia.",
              "Operaciones que requieren movilidad con formato tablet.",
            ],
          },
          {
            name: "Zebra MC33XX",
            category: "Terminal para bodega",
            imageSrc: "/images/products/MC33XX.jpg",
            imageAlt: "Terminal Zebra MC33XX para bodega",
            summary: "Terminal de captura para bodegas, inventario y centros de distribución que requieren lectura intensiva de códigos de barras.",
            techSpecs: [
              "Familia orientada a almacén y centro de distribución.",
              "Opciones de teclado físico para captura repetitiva.",
              "Lectura 1D/2D según configuración.",
              "Diseño para picking, recepción, despacho y control de ubicaciones.",
            ],
            bullets: [
              "Picking, recepción, despacho y control de inventario.",
              "Uso repetitivo en almacén y logística.",
              "Reducción de errores manuales y mejora de trazabilidad.",
            ],
          },
          {
            name: "Zebra MC34",
            category: "Terminal industrial",
            imageSrc: "/images/products/MC34.jpg",
            imageAlt: "Terminal Zebra MC34",
            summary: "Equipo industrial para captura de datos en entornos de almacén, distribución y operación con alto volumen de lectura.",
            techSpecs: [
              "Terminal industrial para flujos de almacén.",
              "Enfoque en captura rápida y operación con teclado físico.",
              "Compatible con aplicaciones WMS, ERP o software interno.",
              "Diseñado para procesos de alto volumen de lectura.",
            ],
            bullets: [
              "Procesos donde la velocidad de captura es crítica.",
              "Inventarios, control de ubicaciones y preparación de pedidos.",
              "Integración con sistemas de gestión de almacén.",
            ],
          },
          {
            name: "Zebra MC94",
            category: "Terminal ultra robusta",
            imageSrc: "/images/products/MC94.jpg",
            imageAlt: "Terminal ultra robusta Zebra MC94",
            summary: "Terminal de alto desempeño para entornos industriales exigentes, almacenes grandes y operación intensiva.",
            techSpecs: [
              "Familia ultra robusta para operación industrial.",
              "Diseño pensado para turnos largos y ambientes demandantes.",
              "Captura avanzada de códigos según configuración.",
              "Enfoque en continuidad para procesos críticos.",
            ],
            bullets: [
              "Manufactura, distribución, logística y operación industrial.",
              "Trabajo pesado y jornadas operativas extensas.",
              "Procesos que requieren lectura confiable y resistencia.",
            ],
          },
          {
            name: "Zebra ZD220",
            category: "Impresora de escritorio",
            imageSrc: "/images/products/ZD220.jpg",
            imageAlt: "Impresora Zebra ZD220",
            summary: "Impresora de escritorio para etiquetas básicas, códigos de barras y procesos de identificación con bajo volumen o punto de atención.",
            techSpecs: [
              "Impresora desktop de entrada.",
              "Impresión de etiquetas y códigos de barras.",
              "Formato compacto para oficina, tienda o punto de atención.",
              "Adecuada para volúmenes moderados y procesos simples.",
            ],
            bullets: [
              "Etiquetas de productos, activos y documentos internos.",
              "Operaciones que inician o necesitan impresión simple.",
              "Áreas administrativas, tiendas y puntos de atención.",
            ],
          },
          {
            name: "Zebra ZD421",
            category: "Impresora de escritorio",
            imageSrc: "/images/products/ZD421.jpg",
            imageAlt: "Impresora Zebra ZD421",
            summary: "Impresora de escritorio para empresas que requieren impresión de etiquetas confiable, fácil administración y mejor continuidad.",
            techSpecs: [
              "Impresora desktop para etiquetas de mayor confiabilidad.",
              "Opciones de impresión directa térmica o transferencia térmica según versión.",
              "Compatible con suministros Zebra para calidad y lectura consistente.",
              "Diseñada para administración y operación empresarial.",
            ],
            bullets: [
              "Retail, salud, logística liviana y administración de activos.",
              "Etiquetas de códigos de barras, identificación y despacho.",
              "Operaciones que requieren mayor control que una impresora básica.",
            ],
          },
          {
            name: "Zebra ZD621",
            category: "Impresora de escritorio premium",
            imageSrc: "/images/products/ZD621.jpg",
            imageAlt: "Impresora Zebra ZD621",
            summary: "Impresora de escritorio avanzada para empresas que necesitan mayor desempeño, calidad de impresión y confiabilidad operacional.",
            techSpecs: [
              "Impresora desktop premium.",
              "Opciones de alta calidad de impresión según configuración.",
              "Orientada a continuidad y administración empresarial.",
              "Adecuada para etiquetas críticas y operación frecuente.",
            ],
            bullets: [
              "Impresión frecuente de etiquetas críticas.",
              "Control de activos, retail, salud y procesos de trazabilidad.",
              "Operaciones que no pueden detenerse por fallas de impresión.",
            ],
          },
          {
            name: "Zebra ZQ600",
            category: "Impresora móvil",
            imageSrc: "/images/products/ZQ600.jpg",
            imageAlt: "Impresora móvil Zebra ZQ600",
            summary: "Impresora móvil para equipos que necesitan generar etiquetas o recibos directamente en campo, pasillo, bodega o ruta.",
            techSpecs: [
              "Impresora móvil para etiquetas o recibos.",
              "Diseño portátil para uso en ruta, pasillo o campo.",
              "Conectividad inalámbrica según configuración.",
              "Complementa terminales móviles Zebra en procesos operativos.",
            ],
            bullets: [
              "Impresión cerca del punto de trabajo y menos desplazamientos.",
              "Logística, inventario, entregas y atención móvil.",
              "Procesos donde imprimir en sitio reduce errores y tiempos.",
            ],
          },
          {
            name: "Zebra ZT411",
            category: "Impresora industrial",
            imageSrc: "/images/products/ZT411.jpg",
            imageAlt: "Impresora industrial Zebra ZT411",
            summary: "Impresora industrial para alto volumen de etiquetas, trazabilidad, manufactura, bodegas y centros de distribución.",
            techSpecs: [
              "Impresora industrial para operación exigente.",
              "Ancho de impresión de 4 pulgadas en la familia ZT411.",
              "Opciones de resolución y conectividad según configuración.",
              "Diseñada para altos volúmenes y ambientes industriales.",
            ],
            bullets: [
              "Impresión continua o exigente.",
              "Etiquetas logísticas, producto, pallet y activos.",
              "Entornos industriales donde la continuidad importa.",
            ],
          },
        ]}
        details={[
          {
            title: "Lectores y captura de datos",
            copy: "Equipos para lectura de códigos de barras, control de inventario, recepción, despacho y trazabilidad de productos.",
          },
          {
            title: "Impresión e identificación",
            copy: "Impresoras y soluciones de etiquetado para bodegas, puntos de atención, activos, productos y procesos logísticos.",
          },
          {
            title: "Soporte técnico Zebra",
            copy: "Diagnóstico, mantenimiento y soporte especializado para equipos Zebra utilizados en operación empresarial.",
          },
        ]}
        useCases={[
          "Inventarios y bodegas",
          "Logística y distribución",
          "Retail y puntos de venta",
          "Trazabilidad de activos",
          "Etiquetado industrial",
          "Operaciones móviles",
        ]}
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
