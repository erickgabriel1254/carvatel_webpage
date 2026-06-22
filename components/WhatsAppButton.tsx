import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/company";

export function WhatsAppButton() {
  return <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar a Carvatel por WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 hover:bg-[#1DB954] sm:bottom-7 sm:right-7"><MessageCircle size={27} fill="currentColor"/></a>;
}
