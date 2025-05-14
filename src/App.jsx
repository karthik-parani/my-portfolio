import React, { useRef, useState, useMemo } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
} from "@mui/material";
import ContactSection from "./components/ContactMe";
import IntroSection from "./components/IntroSection";
import NavBar from "./components/NavBar";
import SkillsetSection from "./components/SkillsetSection";
import ProjectsSection from "./components/ProjectsSection";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Achievements from "./components/Achievements";

function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{
            minHeight: "100vh",
            backgroundColor: (theme) => theme.palette.background.default,
            color: (theme) => theme.palette.text.primary,
          }}
        >
          <NavBar
            onNavigate={scrollToSection}
            onToggleTheme={toggleTheme}
            mode={mode}
          />
          <Container>
            <Routes>
              <Route path="/" element={<IntroSection />} />
              <Route path="/myProject" element={<ProjectsSection />} />
              <Route path="/about" element={<ContactSection />} />
              <Route path="/skills" element={<SkillsetSection />} />
              <Route path="/achievements" element={<Achievements />} />
              {/* Adjusted path */}
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
