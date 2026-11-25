export interface Movie {
  id: number;
  title: string;
  image: string;
  year: number;
  genre: string;
  synopsis: string;
  popular: boolean;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "La última órbita",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&fit=crop&auto=format",
    year: 2024,
    genre: "Ciencia ficción",
    synopsis:
      "Una astronauta recibe una señal inesperada al regresar a la Tierra.",
    popular: true,
  },
  {
    id: 2,
    title: "El mapa del viento",
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=640&fit=crop&auto=format",
    year: 2025,
    genre: "Aventura",
    synopsis:
      "Dos hermanos recorren la costa tras encontrar un mapa en la casa de su abuela.",
    popular: true,
  },
  {
    id: 3,
    title: "Una mesa para dos",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=640&fit=crop&auto=format",
    year: 2026,
    genre: "Comedia",
    synopsis:
      "Una reserva equivocada reúne a dos desconocidos en un restaurante de barrio.",
    popular: false,
  },
  {
    id: 4,
    title: "Camelia",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=640&fit=crop&auto=format",
    year: 2013,
    genre: "Terror",
    synopsis:
      "Una floristeria guarda un secreto sobre la adquisición de sus flores.",
    popular: false,
  },
];
