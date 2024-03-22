import Ticker from "../components/ticker"
import Header from "../components/header"
import SliderBanner from "../components/slider_banner"
import AboutSection from "../components/homepage_about"
import OfferSection from "../components/homepage_offer"
import ReasonSection from "../components/homepage_why_choose_us"
import ReviewsSection from "../components/homepage_reviews"
import NewsSection from "../components/homepage_news"
import InfoSection from "../components/homepage_info"
import BookSection from "../components/homepage_booking"
import Footer from "../components/footer"
import styles from '../pages/homepage.module.scss';
import { useState, useRef } from "react";


const Homepage = () => {
  const [ tickerOpen, setTickerOpen] = useState(true)
  const headerRef = useRef(null)
  const bannerRef = useRef(null)

  const handleTickerCloseBtnClick = () => {
    setTickerOpen(false)
    headerRef.current.style.top = '0'
    bannerRef.current.style.paddingTop = '80px'
  }

  return (
    <div className={styles.container}>
      {tickerOpen && <Ticker onClick={handleTickerCloseBtnClick}/>}
      <Header ref={headerRef}/>
      <SliderBanner ref={bannerRef}/>
      <AboutSection />
      <OfferSection />
      <ReasonSection />
      <ReviewsSection />
      <NewsSection />
      <InfoSection />
      <BookSection />
      <Footer />
    </div>
  )
}

export default Homepage