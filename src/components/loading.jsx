import styles from '../styles/loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.laBallSpinClockwise}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading;