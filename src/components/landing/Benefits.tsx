import { motion } from 'framer-motion';
import { Heart, Clock, Users, CheckCircle2 } from 'lucide-react';
import Container from '@components/Container';
import Card from '@components/Card';
import { fadeInUp, staggerChildren } from '@animations/variants';

const BENEFITS = [
  {
    icon: CheckCircle2,
    title: 'Nunca más adivinas',
    description:
      'Cada persona expresa exactamente lo que quiere recibir. Se acabó el "espero que le guste".',
  },
  {
    icon: Heart,
    title: 'Regalos con significado',
    description:
      'El regalo perfecto no es el más caro: es el que la persona realmente deseaba.',
  },
  {
    icon: Users,
    title: 'Sin repetir ni cruzar regalos',
    description:
      'Familia y amigos ven qué ya fue elegido, sin arruinar la sorpresa.',
  },
  {
    icon: Clock,
    title: 'Ahorra tiempo real',
    description:
      'Olvídate de recorrer tiendas sin rumbo. Ve directo a lo que esa persona quiere.',
  },
] as const;

export default function Benefits() {
  return (
    <section className="bg-white py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="mx-auto mb-14 max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Regalar deja de ser un juego de adivinanzas
          </h2>
          <p className="mt-4 text-gray-institutional">
            ahí no vende productos. Vende la certeza de acertar.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerChildren}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={fadeInUp}>
              <Card className="h-full">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-control bg-orange/10">
                  <Icon className="h-6 w-6 text-orange" strokeWidth={2} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-navy">{title}</h3>
                <p className="text-sm text-gray-institutional">
                  {description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
