import { Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

/**
 * Estructura compartida por todas las páginas: Navbar + contenido + Footer.
 * Las páginas individuales (src/pages) solo se preocupan de su contenido.
 */
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
