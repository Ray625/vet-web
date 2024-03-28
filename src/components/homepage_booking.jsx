import styles from '../styles/homepage_booking.module.scss';
import { PrimaryButton } from './button';
import { forwardRef } from 'react';

const BookSection = forwardRef((props, ref) => {
  const handleBookBtnClick = () => {
    alert('you click book btn!')
  }

  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.wrapper}>
        <object data="/svg/home_footprint_white.svg" className={styles.footprint} aria-label="footprint"> </object>
        <h2 className={styles.title}>Booking Now</h2>
        <h3 className={styles.subtitle}>讓我們為您的寵物提供專業醫療服務</h3>
        <PrimaryButton title={'立即預約'} onClick={handleBookBtnClick}/>
      </div>
    </section>
  )
})

export default BookSection;