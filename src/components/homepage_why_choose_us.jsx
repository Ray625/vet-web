import styles from '../styles/homepage_why_choose_us.module.scss';

const ReasonSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>
            <object data="/svg/home_footprint_white.svg" className={styles.footprint} aria-label="footprint"> </object>
            Why Choose Us
          </h2>
          <h3 className={styles.subtitle}>
            我們值得您的信賴與安心
          </h3>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <h4 className={styles.num}>15</h4>
            <p className={styles.describe}>15位專業醫師</p>
          </div>
          <div className={styles.content}>
            <h4 className={styles.num}>20</h4>
            <p className={styles.describe}>20年看診經驗</p>
          </div>
          <div className={styles.content}>
            <h4 className={styles.num}>1,000+</h4>
            <p className={styles.describe}>千則滿意好評回饋</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReasonSection;