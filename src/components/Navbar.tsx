import Container from '@components/Container';
import Button from '@components/Button';
import { useComingSoonModal } from '@context/ModalContext';
import { BRAND_COPY } from '@constants/copy';

/**
 * Navegación superior. Usa el logo completo oficial (no el isotipo
 * solo), en su variante para fondo claro. Sticky: permanece visible
 * durante todo el scroll.
 */
export default function Navbar() {
  const openComingSoon = useComingSoonModal();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-light bg-white">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <a href="/" aria-label={`${BRAND_COPY.domain} — inicio`}>
            <img
              src="/brand/logo-lockup-light-bg.svg"
              alt={`${BRAND_COPY.domain} — ${BRAND_COPY.tagline}`}
              className="h-10 w-auto sm:h-11"
            />
          </a>

          <Button variant="primary" size="sm" onClick={openComingSoon}>
            Crear lista
          </Button>
        </nav>
      </Container>
    </header>
  );
}
