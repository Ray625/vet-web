import Ticker from "../components/ticker"
import Header from "../components/header"
import SliderBanner from "../components/slider_banner"
import AboutSection from "../components/homepage_about"
import OfferSection from "../components/homepage_offer"
import './homepage.scss'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Ticker />
      <Header />
      <SliderBanner />
      <AboutSection />
      <OfferSection />
    </div>
  )
}

export default Homepage