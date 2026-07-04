# context/

Estado global de React (vía `createContext`), reservado para estado
que de verdad necesitan **muchos** componentes no relacionados
(ej. sesión de usuario autenticado, tema claro/oscuro).

**No usar Context para:** estado local de un formulario o de una
sección — eso es `useState` dentro del propio componente.

Vacío por ahora: se agregará `AuthContext` cuando se conecte
Supabase Auth en una etapa futura.
