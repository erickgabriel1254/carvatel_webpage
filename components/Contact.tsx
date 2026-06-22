"use client";

import { FormEvent, useState } from "react";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { company, whatsappUrl } from "@/config/company";

const details = [
  { icon: Phone, label: "Teléfono", value: company.phone, href: `tel:${company.phoneHref}` },
  { icon: Mail, label: "Correo", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Dirección", value: company.address },
  { icon: Clock3, label: "Horario", value: company.schedule },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return (
    <section id="contacto" className="section-space bg-[#F8F9FA]">
      <div className="container-page grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div><p className="section-kicker">Hablemos</p><h2 className="section-title">Cuéntanos qué necesita tu empresa</h2><p className="section-copy">Conversemos sobre tus equipos, procesos o necesidades de soporte. Nuestro equipo te orientará sobre las opciones disponibles.</p><div className="mt-10 space-y-5">{details.map(({icon: Icon,label,value,href}) => <div key={label} className="flex gap-4"><span className="icon-box shrink-0"><Icon size={21}/></span><div><p className="text-xs font-extrabold uppercase tracking-[.12em] text-gray-400">{label}</p>{href ? <a href={href} className="mt-1 block break-all font-bold text-gray-800 hover:text-[#E30613]">{value}</a> : <p className="mt-1 font-bold leading-6 text-gray-800">{value}</p>}</div></div>)}</div></div>
        <div className="card p-6 sm:p-9">
          {sent ? <div className="flex min-h-[500px] flex-col items-center justify-center text-center"><span className="icon-box h-16 w-16 rounded-2xl"><Send size={28}/></span><h3 className="mt-6 text-2xl font-extrabold">Gracias por contactarnos</h3><p className="mt-3 max-w-md leading-7 text-gray-600">Este formulario aún no envía información. Por ahora puedes escribirnos directamente por WhatsApp.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary mt-7">Abrir WhatsApp</a><button onClick={() => setSent(false)} className="mt-5 text-sm font-bold text-gray-500 hover:text-[#E30613]">Volver al formulario</button></div> : <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <Field label="Nombre" name="name" required/><Field label="Empresa" name="company"/><Field label="Correo" name="email" type="email" required/><Field label="Teléfono" name="phone" type="tel"/>
            <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold text-gray-700">Servicio de interés</span><select name="service" className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 focus:border-[#E30613]" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Soporte técnico Zebra</option><option>Soporte técnico Motorola</option><option>Equipos Zebra</option><option>Radios Motorola</option><option>Software empresarial</option><option>Asesoría tecnológica</option></select></label>
            <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold text-gray-700">Mensaje</span><textarea name="message" rows={5} className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#E30613]" placeholder="¿Cómo podemos ayudarte?"/></label>
            <button type="submit" className="btn-primary sm:col-span-2">Continuar <Send size={18}/></button>
            <p className="text-xs leading-5 text-gray-400 sm:col-span-2">Este formulario es informativo y no almacena ni envía datos.</p>
          </form>}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return <label><span className="mb-2 block text-sm font-bold text-gray-700">{label}</span><input name={name} type={type} required={required} className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm focus:border-[#E30613]"/></label>;
}
