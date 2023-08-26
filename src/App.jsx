import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { GlobalStyles } from "../styled/GlobalStyles";
import { basic } from "../styled/Theme.styled";
import { ThemeProvider } from "styled-components";
import Calculator from "./components/calculator/Calculator";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(basic);

  const handleChangeTheme = (theme) => {
    setSelectedTheme(theme);
    toggleTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  const toggleTheme = (theme) => {
    const themeBtns = document.querySelectorAll(".theme-btn");
    themeBtns.forEach((themeBtn) => {
      if (themeBtn.classList.contains(theme.name)) {
        themeBtn.classList.add("active");
      } else {
        themeBtn.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
      toggleTheme(currentTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Header handleChangeTheme={handleChangeTheme} />
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
