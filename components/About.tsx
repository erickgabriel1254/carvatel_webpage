import { Award, CalendarDays, Lightbulb, LifeBuoy, Puzzle } from "lucide-react";

const values = [
  {
    icon: Puzzle,
    title: "Soluciones",
    copy: "Tecnología práctica pensada para resolver necesidades reales de cada operación.",
  },
  {
    icon: LifeBuoy,
    title: "Soporte",
    copy: "Atención técnica que ayuda a proteger la continuidad de tus procesos.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    copy: "Herramientas y mejoras que convierten la tecnología en una ventaja útil.",
  },
];

const credentials = [
  {
    icon: Award,
    value: "Único en Ecuador",
    label: "Centro de Servicio Autorizado Zebra",
  },
  {
    icon: CalendarDays,
    value: "Más de 30 años",
    label: "de experiencia y trayectoria empresarial",
  },
];

export function About() {
  return (
    <section id="nosotros" className="section-space bg-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="section-kicker">Quiénes somos</p>
            <h2 className="section-title">Experiencia técnica que genera confianza.</h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-[1.05rem] leading-8 text-gray-600">
              Carvatel es una empresa ecuatoriana con más de 30 años de experiencia brindando
              soluciones tecnológicas, soporte confiable y equipos especializados para entornos
              empresariales.
            </p>
            <p className="mt-5 text-[1.05rem] leading-8 text-gray-600">
              Somos el único Centro de Servicio Autorizado Zebra en Ecuador. Nuestro trabajo se
              orienta a la excelencia técnica, la continuidad operativa y la implementación de
              soluciones prácticas que mejoran los procesos de nuestros clientes.
            </p>
          </div>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[26px] bg-gray-900 text-white md:grid-cols-2">
          {credentials.map(({ icon: Icon, value, label }, index) => (
            <div
              key={value}
              className={`flex items-center gap-5 p-7 sm:p-9 ${index === 1 ? "border-t border-white/10 md:border-l md:border-t-0" : ""}`}
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#E30613]">
                <Icon size={26} />
              </span>
              <div>
                <p className="text-xl font-extrabold sm:text-2xl">{value}</p>
                <p className="mt-1 text-sm leading-6 text-gray-400">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {values.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="card p-7">
              <span className="icon-box"><Icon size={23} /></span>
              <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
