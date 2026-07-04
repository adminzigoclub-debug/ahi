import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Container from '@components/Container';
import { fadeInUp } from '@animations/variants';

const FAQS = [
  {
    question: '¿Ahí vende los regalos?',
    answer:
      'No. ahí no es una tienda. Es el lugar donde expresas qué quieres recibir, para que quien te regale sepa exactamente qué comprar y dónde.',
  },
  {
    question: '¿La persona ve que ya elegí su regalo?',
    answer:
      'No. Puede marcar un deseo como "reservado" para evitar duplicados, sin que el dueño de la lista se entere de quién ni qué.',
  },
  {
    question: '¿Necesito pagar para usar ahí?',
    answer:
      'Esta primera versión es completamente gratuita mientras seguimos construyendo el producto.',
  },
  {
    question: '¿Cuándo puedo crear mi cuenta?',
    answer:
      'Muy pronto. Estamos terminando el registro y el resto de la experiencia — esta Landing es el primer paso público del proyecto.',
  },
] as const;

export default function FAQ() {
  return (
    <section className="bg-gray-light py-24">
      <Container size="narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {FAQS.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-control border border-gray-institutional/30 bg-white px-5 py-4 shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-navy">
                {question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-gray-institutional transition-transform duration-300 ease-premium group-open:rotate-180"
                  strokeWidth={2}
                />
              </summary>
              <p className="mt-3 text-sm text-gray-institutional">{answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
