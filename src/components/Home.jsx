import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
  Paper,
  CardActions,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ScienceIcon from "@mui/icons-material/Science";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const libraries = [
  {
    id: 1,
    name: "Ficção",
    description: "Livros de ficção e fantasia",
    icon: <AutoStoriesIcon fontSize="large" color="primary" />,
  },
  {
    id: 2,
    name: "Não Ficção",
    description: "Livros de história e biografia",
    icon: <MenuBookIcon fontSize="large" color="secondary" />,
  },
  {
    id: 3,
    name: "Ciência",
    description: "Livros de ciência e tecnologia",
    icon: <ScienceIcon fontSize="large" color="success" />,
  },
];

function Home() {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, color: "primary.main" }}
      >
        Escolha uma categoria
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ mt: 2 }}
      >
        {libraries.map((lib) => (
          <Grid item xs={12} sm={6} md={4} key={lib.id}>
            <Paper
              elevation={4}
              sx={{
                height: "100%",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 3,
                transition: "box-shadow 0.2s, transform 0.2s",
                ":hover": {
                  boxShadow: 8,
                  transform: "translateY(-4px) scale(1.03)",
                },
              }}
            >
              <Box sx={{ my: 1 }}>{lib.icon}</Box>
              <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "text.primary", mb: 1 }}
                >
                  {lib.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {lib.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to={`/library/${lib.id}`}
                  size="medium"
                  sx={{ fontWeight: 600, minWidth: 120 }}
                >
                  Ver Livros
                </Button>
              </CardActions>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
