// import React from "react";
// import { Box, Button, Grid, Typography, IconButton } from "@mui/material";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

// import { useNavigate } from "react-router-dom";

// const NavBar = ({ onToggleTheme, mode }) => {
//   const navigate = useNavigate();
//   const onNavigateIntroPage = () => {
//     navigate("/");
//   };
//   return (
//     <Box sx={{ p: 2 }}>
//       <Grid container justifyContent="space-between" alignItems="center">
//         {/* Left Logo */}

//         <Grid item>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               cursor: "pointer",
//             }}
//             onClick={onNavigateIntroPage}
//           >
//             <img
//               src="https://i.pinimg.com/736x/45/26/9d/45269d6a36b14be5e2d650069c96abce.jpg"
//               alt="Logo"
//               style={{
//                 width: "50px",
//                 height: "auto",
//                 borderTopRightRadius: "145px",
//                 borderBottomRightRadius: "145px",
//                 borderBottomLeftRadius: "145px",
//                 borderTopLeftRadius: "145px",
//                 marginTop: "10px",
//               }} // Adjust size as needed
//             />
//             <Typography
//               variant="h6"
//               fontWeight="bold"
//               textAlign={"center"}
//               margin="10px"
//               paddingTop={"10px"}
//             >
//               KARTHIK PARANI
//             </Typography>
//           </Box>
//         </Grid>

//         {/* Navigation Items + Theme Toggle */}
//         <Grid item>
//           <Grid container spacing={4} alignItems="center">
//             <Grid item>
//               <Button color="inherit" onClick={() => navigate("/")}>
//                 Intro
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button color="inherit" onClick={() => navigate("/about")}>
//                 About
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button color="inherit" onClick={() => navigate("/skills")}>
//                 Skills
//               </Button>
//             </Grid>

//             <Grid>
//               <Button color="inherit" onClick={() => navigate("/achievements")}>
//                 Achievements
//               </Button>
//             </Grid>

//             <Grid item>
//               <Button color="inherit" onClick={() => navigate("/myProject")}>
//                 My Project
//               </Button>
//             </Grid>

//             <Grid item>
//               <IconButton onClick={onToggleTheme} color="inherit">
//                 {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
//               </IconButton>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import { Box, Button, Grid, Typography, IconButton, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useNavigate } from "react-router-dom";

const NavBar = ({ onToggleTheme, mode }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { label: "Intro", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Achievements", path: "/achievements" },
    { label: "My Project", path: "/myProject" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setExpanded(false); // Smoothly close the menu after clicking a link
  };

  return (
    <Box sx={{ p: 2, borderBottom: "1px solid", borderColor: "divider" }}>
      {/* Main Header Row */}
      <Grid container justifyContent="space-between" alignItems="center">
        
        {/* Left Side: Brand Identity */}
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleNavigation("/")}
          >
            <img
              src="https://i.pinimg.com/736x/45/26/9d/45269d6a36b14be5e2d650069c96abce.jpg"
              alt="Logo"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="subtitle1"
              fontWeight="800"
              sx={{ ml: 1.5, letterSpacing: "0.5px" }}
            >
              KARTHIK PARANI
            </Typography>
          </Box>
        </Grid>

        {/* Right Side: Global Actions */}
        <Grid item>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            
            {/* Desktop Navigation Links (Automatically hidden on Mobile) */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  onClick={() => handleNavigation(item.path)}
                  sx={{ textTransform: "none", fontWeight: 500 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Dark Mode Toggle */}
            <IconButton onClick={onToggleTheme} color="inherit">
              {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            {/* Mobile Menu Icon Toggle (Automatically hidden on Desktop) */}
            <IconButton
              color="inherit"
              onClick={() => setExpanded(!expanded)}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              {expanded ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

          </Box>
        </Grid>
      </Grid>

      {/* Mobile Dropdown Menu (Animate open/close inline) */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box 
          sx={{ 
            display: { xs: "flex", md: "none" }, 
            flexDirection: "column", 
            gap: 1,
            pt: 2, 
            pb: 1 
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.label}
              color="inherit"
              fullWidth
              onClick={() => handleNavigation(item.path)}
              sx={{ 
                justifyContent: "flex-start", 
                textTransform: "none",
                py: 1,
                px: 2,
                borderRadius: "8px",
                "&:hover": { backgroundColor: "action.hover" }
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default NavBar;