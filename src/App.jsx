import ButtonAppBar from "./ButtonAppBar";
import "./App.css";
import Solfeggio from "./solfeggio";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
function App() {
  const [mode, setMode] = useState(true);
  // theme
  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "80vh", width: "90vw" }}>
        <div className="App">
          <ButtonAppBar check={mode} change={() => setMode(!mode)} />
          <p>Select Your Solfeggio Frequencies</p>
          <p>963 Hz</p>
          <Solfeggio />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
