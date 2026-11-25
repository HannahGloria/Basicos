import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import type { Movie } from "./movies";
import "./Banner.css";

export default function Banner({ movie }: { movie: Movie }) {
  return (
    <Box component="section" className="movie-banner" aria-labelledby="featured-movie-title">
      <Stack className="movie-banner__content" spacing={2}>
        <Typography variant="overline" sx={{ fontWeight: 800 }}>
          Película destacada
        </Typography>
        <Typography id="featured-movie-title" component="h1" className="movie-banner__title">
          {movie.title}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          {movie.year} · {movie.genre}
        </Typography>
        <Typography>{movie.synopsis}</Typography>
        <Button
          variant="contained"
          href="#categorias"
          endIcon={<ArrowOutwardIcon />}
          sx={{ alignSelf: "flex-start", bgcolor: "background.default", color: "text.primary",
            "&:hover": { bgcolor: "background.paper" } }}
        >
          Explorar catálogo
        </Button>
      </Stack>
      <div className="movie-banner__media">
        <img className="movie-banner__image" src={movie.image} alt="" fetchPriority="high" />
      </div>
    </Box>
  );
}
