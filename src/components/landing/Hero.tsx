import { motion } from 'framer-motion';
import Container from '@components/Container';
import Button from '@components/Button';
import { useComingSoonModal } from '@context/ModalContext';
import { fadeInUp, staggerChildren } from '@animations/variants';
import { BRAND_COPY } from '@constants/copy';

export default function Hero() {
  const openComingSoon = useComingSoonModal();

  return (
    <section className="relative overflow-hidden bg-navy pb-24 pt-20 sm:pb-32 sm:pt-24">
      {/* Resplandor sutil de fondo — solo tonos de la paleta oficial. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 50% 15%, rgba(255,123,22,0.18), transparent 55%)',
        }}
      />

      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.img
            variants={fadeInUp}
            src="/brand/logo-lockup-dark-bg.svg"
            alt={`${BRAND_COPY.domain} — ${BRAND_COPY.tagline}`}
            className="mb-8 h-28 w-auto sm:h-32"
          />

          <motion.h1
            variants={fadeInUp}
            className="max-w-2xl text-4xl font-bold text-white sm:text-6xl"
          >
            {BRAND_COPY.heroQuestion}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-xl text-lg text-gray-institutional sm:text-xl"
          >
            <span className="font-semibold text-orange">{BRAND_COPY.name}</span>{' '}
            {BRAND_COPY.heroAnswer.replace(`${BRAND_COPY.name} `, '')}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-3 max-w-md text-sm text-gray-institutional sm:text-base"
          >
            {BRAND_COPY.heroSupporting}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="primary" size="lg" onClick={openComingSoon}>
              Crear tu lista
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                document
                  .getElementById('como-funciona')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explorar
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
