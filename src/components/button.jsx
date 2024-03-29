import styles from '../styles/button.module.scss';

const PrimaryButton = ({ title, onClick }) => {
  return (
    <button className={styles.primaryBtn} onClick={onClick}>
      {title}
      <object data="/svg/footprint_white.svg" className={styles.footprint} aria-label="footprint"> </object>
    </button>
  )
}

const OutlineButton = ({ title, onClick }) => {
  return (
    <button className={styles.outlineBtn} onClick={onClick}>
      {title}
      <object data="/svg/footprint_white.svg" className={styles.footprint} aria-label="footprint"> </object>
    </button>
  )
}

const LabelMoreButton = ({ onClick, label }) => { 
  return (
    <label className={styles.moreBtnLabel}>
      {label}
      <button className={styles.labelMoreBtn} onClick={onClick}>
          <i class="fa-solid fa-arrow-right"></i>
      </button>
    </label>
  )
}
  
export { PrimaryButton, OutlineButton, LabelMoreButton };