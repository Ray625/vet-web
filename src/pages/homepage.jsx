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
import { useEffect, useState, useRef } from "react";


const HomePage = () => {
  const [ tickerOpen, setTickerOpen] = useState(true)
  const [ bookIntersect, setBookIntersect ] = useState(false)
  const headerRef = useRef(null)
  const bannerRef = useRef(null)
  const bookingRef = useRef(null)

  // 監測視窗與booking section重疊，則讓mobile預約按鈕隱藏
  useEffect(() => {
    const observeTarget = bookingRef.current
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBookIntersect(true)
        }else {
          setBookIntersect(false)
        }
      },
      { threshold: 0 } // 只要進入視窗即觸發
    );

    if (observeTarget) {
      observer.observe(observeTarget);
    }

    return () => {
      if (observeTarget) {
        observer.unobserve(observeTarget);
      }
    };
  }, [bookIntersect]);

  const handleTickerCloseBtnClick = () => {
    setTickerOpen(false)
    headerRef.current.style.top = '0'
    bannerRef.current.style.paddingTop = '80px'
  }  

  return (
    <div className={styles.container}>
      {tickerOpen && <Ticker onClick={handleTickerCloseBtnClick}/>}
      <Header 
        bookBtnDisplay={!bookIntersect}
        ref={headerRef}
        />
      <SliderBanner ref={bannerRef}/>
      <AboutSection />
      <OfferSection />
      <ReasonSection />
      <ReviewsSection />
      <NewsSection />
      <InfoSection />
      <BookSection ref={bookingRef}/>
      <Footer />
    </div>
  )
}

export default HomePage