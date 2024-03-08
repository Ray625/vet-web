import Ticker from "../components/ticker"
import Header from "../components/header"
import SliderBanner from "../components/slider_banner"
import AboutSection from "../components/homepage_about"
import OfferSection from "../components/homepage_offer"
import ReasonSection from "../components/homepage_why_choose_us"
import ReviewsSection from "../components/homepage_reviews"
import NewsSection from "../components/homepage_news"
import InfoSection from "../components/homepage_info"
import BookSection from "../components/homepage_book"
import './homepage.scss'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Ticker />
      <Header />
      <SliderBanner />
      <AboutSection />
      <OfferSection />
      <ReasonSection />
      <ReviewsSection />
      <NewsSection />
      <InfoSection />
      <BookSection />
    </div>
  )
}

export default Homepage