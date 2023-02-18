import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      light: "#EDF4F2",
      main: "#7C8363",
      dark: "#31473A",
    },
   },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
