import SliderBanner from "../components/slider_banner"
import AboutSection from "../components/homepage_about"
import OfferSection from "../components/homepage_offer"
import ReasonSection from "../components/homepage_why_choose_us"
import ReviewsSection from "../components/homepage_reviews"
import NewsSection from "../components/homepage_news"
import InfoSection from "../components/homepage_info"
import BookSection from "../components/homepage_booking"
import styles from '../pages/homepage.module.scss';
import { BookingButton } from "../components/button"
import { useRef, useEffect, useState } from "react";


const HomePage = () => {
  const [ bookIntersect, setBookIntersect ] = useState(false)
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

  return (
    <div className={styles.container}>
      {!bookIntersect && <BookingButton />}
      <SliderBanner />
      <AboutSection />
      <OfferSection />
      <ReasonSection />
      <ReviewsSection />
      <NewsSection />
      <InfoSection />
      <BookSection ref={bookingRef}/>
    </div>
  )
}

export default HomePage