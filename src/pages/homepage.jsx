import Ticker from "../components/ticker"
import Header from "../components/header"
import SliderBanner from "../components/sliderBanner"
import './homepage.scss'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Ticker />
      <Header />
      <SliderBanner />
    </div>
  )
}

export default Homepage