import { motion } from 'framer-motion';
import { ListPlus, Share2, Gift } from 'lucide-react';
import Container from '@components/Container';
import { fadeInUp, staggerChildren } from '@animations/variants';

const STEPS = [
  {
    icon: ListPlus,
    step: '01',
    title: 'Crea tu lista',
    description:
      'Agrega los regalos que realmente quieres recibir: desde una idea suelta hasta el producto exacto.',
  },
  {
    icon: Share2,
    step: '02',
    title: 'Compártela',
    description:
      'Envíasela a familia, amigos o pareja. Ellos ven exactamente qué deseas, sin arruinar la sorpresa.',
  },
  {
    icon: Gift,
    step: '03',
    title: 'Recibe el regalo perfecto',
    description:
      'Quien te regale ya sabe qué acertar. Tú solo disfrutas el momento.',
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="mx-auto mb-14 max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Cómo funciona
          </h2>
          <p className="mt-4 text-gray-institutional">
            Tres pasos. Nada más.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerChildren}
          className="grid grid-cols-1 gap-10 sm:grid-cols-3"
        >
          {STEPS.map(({ icon: Icon, step, title, description }) => (
            <motion.div
              key={step}
              variants={fadeInUp}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange/10">
                <Icon className="h-6 w-6 text-orange" strokeWidth={2} />
              </div>
              <span className="mb-1 text-sm font-semibold text-orange">
                {step}
              </span>
              <h3 className="mb-2 text-xl font-bold text-navy">{title}</h3>
              <p className="text-sm text-gray-institutional">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
