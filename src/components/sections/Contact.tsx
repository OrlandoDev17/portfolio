// Componentes
import SectionContainer from "../ui/SectionContainer";
import ContactCard from "../ui/ContactCard";
// Icon
import { MailBrand } from "../icons/Brands";
// Constantes
import { CONTACT_CARDS } from "@/lib/constants";
//Framer
import { motion } from "motion/react";
// Variantes
import { containerVariants } from "@/lib/motionVariants";

export default function Contact() {
  return (
    <SectionContainer
      id="contact"
      icon={MailBrand}
      title="Contacto"
      paragraph="¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!"
      className="mt-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8"
      >
        {CONTACT_CARDS.map((card) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, x: card.x, y: card.y },
              visible: { opacity: 1, x: 0, y: 0 },
            }}
            key={card.id}
          >
            <ContactCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
