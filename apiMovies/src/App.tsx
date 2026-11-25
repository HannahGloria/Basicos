import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { movies, type Movie } from "./movies";
import Banner from "./Banner";

const genres = [...new Set(movies.map((movie) => movie.genre))];
const popularMovies = movies.filter((movie) => movie.popular);
const featuredMovie = popularMovies[0] ?? movies[0];
const recentMovies = [...movies].sort(
  (first, second) => second.year - first.year,
);

function normalizeTitle(title: string) {
  return title
    .trim()
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function MovieGrid({
  items,
  emptyMessage = "No hay películas disponibles.",
}: {
  items: Movie[];
  emptyMessage?: string;
}) {
  if (items.length === 0) {
    return <Typography role="status">{emptyMessage}</Typography>;
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        gap: { xs: 2, md: 3 },
      }}
    >
      {items.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Box>
  );
}

export default function App() {
  const [genre, setGenre] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const query = normalizeTitle(search);
  const matchingMovies = movies.filter(
    (movie) =>
      (genre === null || movie.genre === genre) &&
      normalizeTitle(movie.title).includes(query),
  );

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container
        component="main"
        id="inicio"
        maxWidth="lg"
        sx={{ py: { xs: 4, md: 6 } }}
      >
        <Stack spacing={{ xs: 6, md: 9 }}>
          {featuredMovie && <Banner movie={featuredMovie} />}

          <Box
            component="section"
            id="populares"
            aria-labelledby="popular-title"
            sx={{ borderTop: 1, borderColor: "divider", pt: 3 }}
          >
            <Typography
              component="h2"
              variant="h5"
              id="popular-title"
              color="primary.main"
              gutterBottom
            >
              Populares
            </Typography>
            <MovieGrid items={popularMovies} />
          </Box>

          <Box
            component="section"
            id="categorias"
            aria-labelledby="categories-title"
            sx={{ bgcolor: "background.paper", borderRadius: 3, p: { xs: 2, sm: 4 } }}
          >
            <Typography
              component="h2"
              variant="h5"
              id="categories-title"
              color="secondary.main"
              gutterBottom
            >
              Categorías
            </Typography>
            <TextField
              label="Buscar por título"
              type="search"
              size="small"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              sx={{ width: "100%", maxWidth: 400, mt: 1, mb: 2 }}
            />
            <Stack
              direction="row"
              useFlexGap
              spacing={1}
              sx={{ flexWrap: "wrap", mb: 2 }}
            >
              <Button
                variant={genre === null ? "contained" : "outlined"}
                aria-pressed={genre === null}
                onClick={() => setGenre(null)}
              >
                Todas
              </Button>
              {genres.map((option) => (
                <Button
                  key={option}
                  variant={genre === option ? "contained" : "outlined"}
                  aria-pressed={genre === option}
                  onClick={() => setGenre(option)}
                >
                  {option}
                </Button>
              ))}
            </Stack>
            <MovieGrid
              items={matchingMovies}
              emptyMessage="No se encontraron películas con esos filtros."
            />
          </Box>

          <Box
            component="section"
            id="novedades"
            aria-labelledby="recent-title"
            sx={{ borderTop: 1, borderColor: "divider", pt: 3 }}
          >
            <Typography
              component="h2"
              variant="h5"
              id="recent-title"
              gutterBottom
            >
              Novedades
            </Typography>
            <MovieGrid items={recentMovies} />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
