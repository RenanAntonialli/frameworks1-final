import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Box from "@mui/material/Box";

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" color="primary" elevation={3}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MenuBookIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              userSelect: "none",
              color: "inherit",
            }}
          >
            Biblioteca Virtual
          </Typography>
        </Box>
        <Button
          color="secondary"
          variant="contained"
          sx={{ fontWeight: 600 }}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
