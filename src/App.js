import {
  About,
  Chat,
  Contact,
  Experience,
  Header,
  Home,
  Skills,
} from "./components";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@material-ui/core";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Box position="sticky">
          <Header mode={mode} setMode={setMode} />
          <Chat />
        </Box>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
