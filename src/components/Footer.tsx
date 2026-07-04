import { Instagram, Facebook, Mail } from 'lucide-react';
import Container from '@components/Container';
import Button from '@components/Button';
import { useComingSoonModal } from '@context/ModalContext';
import { BRAND_COPY } from '@constants/copy';

const LEGAL_LINKS = ['Privacidad', 'Términos', 'Contacto'];

const SOCIAL_LINKS = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Mail, label: 'Correo' },
] as const;

/**
 * Footer con el logo completo oficial (variante para fondo oscuro),
 * el CTA final de la Landing y los enlaces institucionales.
 */
export default function Footer() {
  const openComingSoon = useComingSoonModal();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-3 sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <img
              src="/brand/logo-lockup-dark-bg.svg"
              alt={`${BRAND_COPY.domain} — ${BRAND_COPY.tagline}`}
              className="h-14 w-auto"
            />
          </div>

          <div className="flex flex-col items-center sm:items-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {BRAND_COPY.heroQuestion}
            </h2>
            <p className="mt-3 max-w-xs text-sm text-gray-institutional">
              Crea tu lista en {BRAND_COPY.name} y deja que quienes te
              quieren acierten siempre.
            </p>
            <Button
              variant="primary"
              size="md"
              className="mt-6"
              onClick={openComingSoon}
            >
              Crear mi lista
            </Button>
          </div>

          <div className="flex flex-col items-center gap-6 sm:items-end">
            <nav className="flex gap-6 text-sm font-semibold text-white">
              {LEGAL_LINKS.map((label) => (
                <a key={label} href="#" className="hover:text-orange">
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-gray-institutional">
          &copy; {year} {BRAND_COPY.name}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
