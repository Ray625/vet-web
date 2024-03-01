import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from '../styles/slider_banner.module.scss'
import { OutlineButton } from './button';

const SliderBanner = () => {
  const handleMoreBtnClick = () => {
    alert('You click more button!')
  }

  const PrevArrowButton = ({ onClick }) => {
    return (
      <button className={styles.prevArrowBtn} onClick={onClick}>
        <i class="fa-solid fa-arrow-left"></i>
      </button>
    )
  }

  const NextArrowButton = ({ onClick }) => {
    return (
      <button className={styles.nextArrowBtn} onClick={onClick}>
        <i class="fa-solid fa-arrow-left"></i>
      </button>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease",
    nextArrow: <NextArrowButton />,
    prevArrow: <PrevArrowButton />,
  };

  return (
    <section className="slider-container">
      <Slider {...settings}>
        <div className={styles.wrapper}>
          <div className={styles.bannerBody}>
            <p className={styles.title}>像家人一樣呵護您的寵物</p>
            <p className={styles.enTitle}>Caring for your pets like <span>family</span> 
            <object data="/svg/home_footprint.svg" className={styles.footprint} aria-label="footprint"> </object>
            </p>
            <OutlineButton title={'瞭解更多'} onClick={handleMoreBtnClick} />
          </div>
        </div>
        <div className={styles.wrapper_2}>
          <div className={styles.bannerBody}>
            <p className={styles.title}>寵物的健康是我們的首要任務</p>
            <p className={styles.enTitle}>Your Pet's Health is Our Priority
            <object data="/svg/home_footprint_white.svg" className={styles.footprint} aria-label="footprint"> </object>
            </p>
            <OutlineButton title={'瞭解更多'} onClick={handleMoreBtnClick} />
          </div>
        </div>
      </Slider>
    </section>
  )
}

export default SliderBanner