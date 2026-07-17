export const INTERNAL_APP_URL = "";

export const company = {
  name: "Carvatel",
  tagline: "Soluciones · Soporte · Innovación",
  address: "Antonio de Ulloa N27-126 y Selva Alegre, 170129 Quito, Ecuador",
  city: "Quito, Ecuador",
  phone: "+593 999 023 176",
  phoneHref: "+593999023176",
  whatsapp: "0999023176",
  whatsappHref: "593999023176",
  email: "operaciones@grupocarvatel.com",
  schedule: "Lunes a viernes de 08:00 a 17:00",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Antonio+de+Ulloa+N27-126+y+Selva+Alegre+Quito+Ecuador",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=Antonio+de+Ulloa+N27-126+y+Selva+Alegre,+Quito,+Ecuador&output=embed",
  internalAppUrl: INTERNAL_APP_URL,
} as const;

export const whatsappUrl = `https://api.whatsapp.com/send?phone=${company.whatsappHref}&text=${encodeURIComponent(
  "Hola, deseo más información sobre los servicios de Carvatel."
)}`;
