import styles from './button.module.scss';

const PrimaryButton = ({title, onClick}) => {
  return (
    <button className={styles.primaryBtn} onClick={onClick}>
      {title}
      <object data="footprint_white.svg" width="13.5" height="12" className={styles.footprint} aria-label="footprint"> </object>
    </button>
  )
}

export { PrimaryButton };