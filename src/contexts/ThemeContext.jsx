import { createContext, useState, useContext } from "react";

const defaultThemeContext = {
  tickerOpen: null,
  setTickerOpen: () => {},
}

const ThemeContext = createContext(defaultThemeContext);

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [tickerOpen, setTickerOpen] = useState(true);

  return (
    <ThemeContext.Provider value={{ 
      tickerOpen, 
      setTickerOpen, 
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };