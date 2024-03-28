import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from '../styles/ticker.module.scss' ;

const news = [
    '2024 春節營業時間調整: 2/9至2/13休診，請需要拿藥的毛孩提前準備。',
    '2024 3/29至3/30休診: 醫師外出進修，暫停看診兩日。',
    '2024 5/1休診: 院內進行設備更新，暫停看診。',
  ]

const NewsSlider = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true, // 垂直切換
    speed: 1500,
    autoplaySpeed: 5000,
    easing: "ease",
  };

  return (
    <div className={styles.cardSlider}>
      <Slider {...settings}>
        {news.map((newsItem) => {
          return <p className={styles.news}>{newsItem}</p>
        })}
      </Slider>      
    </div>
  )
}

const Ticker = ({ onClick }) => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <NewsSlider />
      </div>
        <button className={styles.closeBtn} aria-label="close" onClick={onClick}><i class="fa-solid fa-xmark"></i></button>
    </div>
  )
}

export default Ticker;