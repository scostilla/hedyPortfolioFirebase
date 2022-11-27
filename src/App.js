import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import ThemeProvider from "./contexts/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
    <div>
      <Home />
    </div>
    </ThemeProvider>
  );
}

export default App;
