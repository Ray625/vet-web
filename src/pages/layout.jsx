import Ticker from "../components/ticker"
import Header from "../components/header"
import Footer from "../components/footer"
import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import useRWD from '../hooks/useRWD';
import styles from '../pages/layout.module.scss';


const Layout = () => {
  const {tickerOpen, setTickerOpen} = useTheme()
  const device = useRWD()

  useEffect(() => { 
    if (device === 'mobile') {
      setTickerOpen(false)
    } else if (device === 'PC') {
      setTickerOpen(true)
    }
  },[device, setTickerOpen])

  const handleTickerCloseBtnClick = () => {
    setTickerOpen(false)
  }
  
  return (
    <div className={styles.container}>
      {tickerOpen && <Ticker onClick={handleTickerCloseBtnClick}/>}
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;
