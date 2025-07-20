// Componentes
import SectionContainer from "../ui/SectionContainer";
import ContactCard from "../ui/ContactCard";
// Icon
import { MailBrand } from "../icons/Brands";
// Constantes
import { CONTACT_CARDS } from "@/lib/constants";

export default function Contact() {
  return (
    <SectionContainer
      id="contact"
      icon={MailBrand}
      title="Contacto"
      paragraph="¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!"
      className="mt-16"
    >
      <div className="grid grid-cols-3 gap-8 my-8 ">
        {CONTACT_CARDS.map((card) => (
          <ContactCard key={card.id} {...card} />
        ))}
      </div>
    </SectionContainer>
  );
}
