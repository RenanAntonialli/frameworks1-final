import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonIcon from "@mui/icons-material/Person";

function BookCard({ id, title, authors, description, thumbnail }) {
  return (
    <Card
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        mb: 3,
        alignItems: "stretch",
        borderRadius: 3,
        overflow: "hidden",
        minHeight: 180,
        background: "#fff",
        boxShadow: 6,
      }}
    >
      {thumbnail && (
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", sm: 120 },
            height: { xs: 220, sm: "100%" },
            objectFit: "cover",
            background: "#fafafa",
          }}
          image={thumbnail}
          alt={title}
        />
      )}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "primary.main", mb: 1 }}
            gutterBottom
          >
            {title}
          </Typography>
          {authors && (
            <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: "wrap" }}>
              {authors.map((autor) => (
                <Chip
                  key={autor}
                  icon={<PersonIcon />}
                  label={autor}
                  color="info"
                  variant="outlined"
                  size="small"
                />
              ))}
            </Stack>
          )}
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description.substring(0, 120)}...
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            size="small"
            component={RouterLink}
            to={`/book/${id}`}
            endIcon={<ArrowForwardIcon />}
            variant="outlined"
            color="primary"
            sx={{ fontWeight: 600 }}
          >
            Ver detalhes
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default BookCard;
