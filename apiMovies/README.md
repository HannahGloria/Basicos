# API Movies

Catálogo de películas en React, TypeScript, Vite y Material UI. Usa películas ficticias para probar la navegación, los filtros por género y el orden por año de estreno antes de integrar una API.

## Ejecutar en local

Desde la carpeta `apiMovies`:

```sh
npm install
npm run dev
```

Abre la URL que muestra Vite en la terminal. Ejecuta `npm run lint` para revisar el código y `npm run build` para generar la compilación de producción.

## Estructura

- `src/main.tsx` monta la aplicación.
- `src/App.tsx` organiza el catálogo y controla el filtro por género.
- `src/Navbar.tsx` contiene la navegación para escritorio y móvil.
- `src/MovieCard.tsx` muestra los datos de cada película.
- `src/movies.ts` define el tipo `Movie` y contiene los datos de ejemplo.

Al integrar una API, adapta su respuesta al tipo `Movie` y usa los datos obtenidos para alimentar el catálogo.
