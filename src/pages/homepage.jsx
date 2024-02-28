import Ticker from "../components/ticker"
import Header from "../components/header"
import './homepage.scss'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Ticker />
      <Header />
    </div>
  )
}

export default Homepage