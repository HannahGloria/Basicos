import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { Movie } from "./movies";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card component="article" variant="outlined"
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        sx={{ aspectRatio: "16 / 9", objectFit: "cover", bgcolor: "background.default" }}
        image={movie.image}
        alt=""
        loading="lazy"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography component="h3" variant="h6">
          {movie.title}
        </Typography>
        <Typography color="secondary.main" variant="body2" sx={{ mb: 1 }}>
          {movie.year} · {movie.genre}
        </Typography>
        <Typography variant="body2">{movie.synopsis}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Más detalles</Button>
      </CardActions>
    </Card>
  );
}
