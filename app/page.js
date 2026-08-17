/* ==========================================================================
   Página de inicio
   --------------------------------------------------------------------------
   Orden de las secciones:
   1. Hero
   2. Barra de credibilidad
   3. Servicios
   4. Metodología de trabajo
   5. Beneficios
   6. Socio fundador
   7. Preguntas frecuentes
   8. Contacto
   (la barra superior, el pie de página y el botón de WhatsApp viven en el
   layout raíz y se muestran en todas las páginas)
   ========================================================================== */

import Hero from "@/components/home/Hero";
import Credibility from "@/components/home/Credibility";
import Services from "@/components/home/Services";
import Methodology from "@/components/home/Methodology";
import Benefits from "@/components/home/Benefits";
import Founder from "@/components/home/Founder";
import Faq from "@/components/home/Faq";
import ContactSection from "@/components/home/ContactSection";

export default function Inicio() {
  return (
    <>
      <Hero />
      <Credibility />
      <Services />
      <Methodology />
      <Benefits />
      <Founder />
      <Faq />
      <ContactSection />
    </>
  );
}
