import React from "react";
import { Box, Button, Grid, Typography, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useNavigate } from "react-router-dom";

const NavBar = ({ onToggleTheme, mode }) => {
  const navigate = useNavigate();
  const onNavigateIntroPage = () => {
    navigate("/");
  };
  return (
    <Box sx={{ p: 2 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        {/* Left Logo */}

        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={onNavigateIntroPage}
          >
            <img
              src="https://i.pinimg.com/736x/45/26/9d/45269d6a36b14be5e2d650069c96abce.jpg"
              alt="Logo"
              style={{
                width: "50px",
                height: "auto",
                borderTopRightRadius: "145px",
                borderBottomRightRadius: "145px",
                borderBottomLeftRadius: "145px",
                borderTopLeftRadius: "145px",
                marginTop: "10px",
              }} // Adjust size as needed
            />
            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign={"center"}
              margin="10px"
              paddingTop={"10px"}
            >
              KARTHIK PARANI
            </Typography>
          </Box>
        </Grid>

        {/* Navigation Items + Theme Toggle */}
        <Grid item>
          <Grid container spacing={4} alignItems="center">
            <Grid item>
              <Button color="inherit" onClick={() => navigate("/")}>
                Intro
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit" onClick={() => navigate("/about")}>
                About
              </Button>
            </Grid>
            <Grid item>
              <Button color="inherit" onClick={() => navigate("/skills")}>
                Skills
              </Button>
            </Grid>

            <Grid>
              <Button color="inherit" onClick={() => navigate("/achievements")}>
                Achievements
              </Button>
            </Grid>

            <Grid item>
              <Button color="inherit" onClick={() => navigate("/myProject")}>
                My Project
              </Button>
            </Grid>

            <Grid item>
              <IconButton onClick={onToggleTheme} color="inherit">
                {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavBar;
