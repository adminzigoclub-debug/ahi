import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
import { ROUTES } from '@constants/routes';

/**
 * Árbol de rutas de la app. `MainLayout` envuelve todas las páginas
 * con Navbar + Footer, de forma que cada página nueva solo declara
 * su contenido, no su estructura.
 */
export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);
