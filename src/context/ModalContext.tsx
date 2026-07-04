import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import Modal from '@components/Modal';
import Button from '@components/Button';

interface ModalContextValue {
  openComingSoon: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

/**
 * Envuelve la app entera (ver App.tsx). Cualquier componente —
 * el botón del Navbar, el del Hero o el del Footer— dispara el mismo
 * modal a través de `useComingSoonModal()`, sin pasar props manualmente
 * a través de varias capas de componentes.
 */
export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openComingSoon: () => setOpen(true) }}>
      {children}

      <Modal open={open} onClose={() => setOpen(false)}>
        <h3 className="mb-2 text-lg font-bold text-navy">
          Muy pronto podrás crear tu lista.
        </h3>
        <p className="mb-6 text-sm text-gray-institutional">
          Gracias por tu interés.
        </p>
        <Button variant="primary" className="w-full" onClick={() => setOpen(false)}>
          Entendido
        </Button>
      </Modal>
    </ModalContext.Provider>
  );
}

export function useComingSoonModal(): () => void {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useComingSoonModal debe usarse dentro de <ModalProvider>');
  }
  return ctx.openComingSoon;
}
