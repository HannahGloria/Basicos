# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Objetivo:
Construir un contador de usuarios ficticios usando la API de https://randomuser.me/api/.

Requisitos:

Mostrar un botón “Agregar usuario” que agregue un nuevo usuario a la lista.

Mostrar todos los usuarios agregados en pantalla, con:

Foto

Nombre completo

Email

Agregar un botón “Eliminar” al lado de cada usuario para borrarlo de la lista.

Mostrar un mensaje de carga mientras se obtiene cada usuario.

Manejar errores y mostrarlos si falla la petición.