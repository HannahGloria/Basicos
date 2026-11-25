import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";

const sections = [
  { id: "populares", label: "Populares" },
  { id: "categorias", label: "Categorías" },
  { id: "novedades", label: "Novedades" },
];

export default function Navbar() {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          component="nav"
          aria-label="Navegación principal"
        >
          <Typography
            variant="h6"
            component="a"
            href="#inicio"
            className="titleNavbar"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mr: "auto",
              textDecoration: "none",
            }}
          >
            <LocalMoviesOutlinedIcon />
            API Movies
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {sections.map(({ id, label }) => (
              <Button
                key={id}
                href={`#${id}`}
                color="inherit"
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                {label}
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{ display: { xs: "inline-flex", sm: "none" } }}
            color="inherit"
            aria-label="Abrir navegación"
            aria-haspopup="menu"
            aria-expanded={Boolean(anchor)}
            aria-controls={anchor ? "navigation-menu" : undefined}
            onClick={(event) => setAnchor(event.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="navigation-menu"
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={() => setAnchor(null)}
          >
            {sections.map(({ id, label }) => (
              <MenuItem
                key={id}
                component="a"
                href={`#${id}`}
                onClick={() => setAnchor(null)}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
