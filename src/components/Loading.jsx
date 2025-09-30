import React from "react";
import { Box, CircularProgress, Typography, Paper } from "@mui/material";

function Loading() {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CircularProgress size={54} sx={{ color: "primary.main", mb: 2 }} />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          Carregando...
        </Typography>
      </Paper>
    </Box>
  );
}

export default Loading;
