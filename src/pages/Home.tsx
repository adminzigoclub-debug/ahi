import Hero from '@components/landing/Hero';
import Benefits from '@components/landing/Benefits';
import HowItWorks from '@components/landing/HowItWorks';
import FAQ from '@components/landing/FAQ';

/**
 * Landing Page MVP. Sin backend: "Crear lista" / "Crear tu lista" /
 * "Crear mi lista" abren el modal de "muy pronto" (ver ModalContext).
 * El CTA final y los enlaces institucionales viven en el Footer,
 * igual que en la referencia de diseño aprobada.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <FAQ />
    </>
  );
}
