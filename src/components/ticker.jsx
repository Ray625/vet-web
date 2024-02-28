import styles from './ticker.module.scss' ;

const Ticker = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.news}>2024春節營業時間調整公告</p>
      </div>
        <button className={styles.closeBtn} aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
    </div>
  )
}

export default Ticker;