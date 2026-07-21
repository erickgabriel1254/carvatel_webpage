"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, Clock3, LoaderCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { company, whatsappUrl } from "@/config/company";

const details = [
  { icon: Phone, label: "Teléfono", value: company.phone, href: `tel:${company.phoneHref}` },
  { icon: Mail, label: "Correo", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Dirección", value: company.address },
  { icon: Clock3, label: "Horario", value: company.schedule },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formStartedAt, setFormStartedAt] = useState(() => Math.floor(Date.now() / 1000));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "No fue posible enviar el mensaje.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "No fue posible enviar el mensaje.");
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="section-space bg-[#F8F9FA]">
      <div className="container-page grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div>
          <p className="section-kicker">Hablemos</p>
          <h2 className="section-title">Cuéntanos qué necesita tu empresa</h2>
          <p className="section-copy">
            Conversemos sobre tus equipos, procesos o necesidades de soporte. Nuestro equipo te
            orientará sobre las opciones disponibles.
          </p>
          <div className="mt-10 space-y-5">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4">
                <span className="icon-box shrink-0"><Icon size={21} /></span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[.12em] text-gray-400">{label}</p>
                  {href ? (
                    <a href={href} className="mt-1 block break-all font-bold text-gray-800 hover:text-[#E30613]">{value}</a>
                  ) : (
                    <p className="mt-1 font-bold leading-6 text-gray-800">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 sm:p-9">
          {status === "success" ? (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <span className="icon-box h-16 w-16 rounded-2xl"><Send size={28} /></span>
              <h3 className="mt-6 text-2xl font-extrabold">Mensaje enviado</h3>
              <p className="mt-3 max-w-md leading-7 text-gray-600">
                Gracias por contactar a Carvatel. Recibimos tu solicitud y responderemos por los
                datos proporcionados.
              </p>
              <button type="button" onClick={() => { setFormStartedAt(Math.floor(Date.now() / 1000)); setStatus("idle"); }} className="btn-primary mt-7">
                Enviar otro mensaje
              </button>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 text-sm font-bold text-[#E30613] hover:text-[#B8000D]">
                También puedes escribirnos por WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombre" name="name" required />
              <Field label="Empresa" name="company" />
              <Field label="Correo" name="email" type="email" required />
              <Field label="Teléfono" name="phone" type="tel" />

              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-bold text-gray-700">Servicio de interés</span>
                <select name="service" className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 focus:border-[#E30613]" defaultValue="">
                  <option value="" disabled>Selecciona una opción</option>
                  <option>Soporte técnico Zebra</option>
                  <option>Soporte técnico Motorola</option>
                  <option>Equipos Zebra</option>
                  <option>Radios Motorola</option>
                  <option>Equipos Hytera</option>
                  <option>Software empresarial</option>
                  <option>Asesoría tecnológica</option>
                </select>
              </label>

              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-bold text-gray-700">Mensaje</span>
                <textarea name="message" rows={5} required maxLength={3000} className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#E30613]" placeholder="¿Cómo podemos ayudarte?" />
              </label>

              <label className="absolute -left-[10000px]" aria-hidden="true">
                Sitio web
                <input name="website" type="text" tabIndex={-1} autoComplete="off" />
              </label>
              <input name="form_started_at" type="hidden" value={formStartedAt} />

              {status === "error" && (
                <div role="alert" className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 sm:col-span-2">
                  <AlertCircle className="mt-0.5 shrink-0" size={18} />
                  <p>{errorMessage} También puedes escribirnos por WhatsApp.</p>
                </div>
              )}

              <button type="submit" disabled={status === "sending"} className="btn-primary disabled:cursor-wait disabled:opacity-70 sm:col-span-2">
                {status === "sending" ? <><LoaderCircle className="animate-spin" size={18} /> Enviando...</> : <>Enviar mensaje <Send size={18} /></>}
              </button>
              <p className="text-xs leading-5 text-gray-400 sm:col-span-2">
                Usaremos tus datos únicamente para responder esta solicitud.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-gray-700">{label}</span>
      <input name={name} type={type} required={required} maxLength={150} className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm focus:border-[#E30613]" />
    </label>
  );
}
