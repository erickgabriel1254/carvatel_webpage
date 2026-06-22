import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { Equipment } from "@/components/Equipment";
import { Contact } from "@/components/Contact";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Equipment />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
