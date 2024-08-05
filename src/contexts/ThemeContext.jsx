import { createContext, useState, useContext, useEffect } from "react";
import useRWD from '../hooks/useRWD';


const defaultThemeContext = {
  tickerOpen: null,
  setTickerOpen: () => {},
}

const ThemeContext = createContext(defaultThemeContext);

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [tickerOpen, setTickerOpen] = useState(true);
  const device = useRWD()

  useEffect(() => {
    if (device === 'mobile') {
      setTickerOpen(false)
    } else if (device === 'PC') {
      setTickerOpen(true)
    }
  },[device, setTickerOpen])

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