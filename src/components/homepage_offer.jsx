import styles from '../styles/homepage_offer.module.scss'
import { PrimaryButton, MoreButton } from './button'

const Card = ({ className, title, content, onClick}) => {
  return (
    <div className={className}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardContent}>{content}</p>
      <div className={styles.cardBtn}>
        <MoreButton label={'See more'} onClick={onClick}/>
      </div>
    </div>
  )
}

const OfferSection = () => {
  const handleMoreBtnClick = () => {
    alert('you click more btn')
  }

  const handleReserveBtnClick = () => {
    alert('you hit the reserve btn')
  }

  return (
    <section className='offer-container'>
      <div className={styles.wrapper}>        
        <div className={styles.body}>
          <div className={styles.icon}>
            <object data="/svg/home_footprint.svg" className={styles.footprint} aria-label="footprint"> </object>
          </div>
          <h2 className={styles.title}>Our Offer</h2>
          <h3 className={styles.subtitle}>
            專業醫療服務，用心護理
          </h3>
          <div className={styles.cardList}>
            <Card 
              className={styles.leftCard}
              title={'內科'}
              content={'我們備有影像學以及血液學檢查等各項精密儀器，更透過各科醫師之間的快速會診，用專業為毛小孩提供完善優質的醫療服務。'}
              onClick={handleMoreBtnClick} />
            <Card 
              className={styles.rightCard}
              title={'外科'}
              content={'我們的團隊備有麻醉專業的獸醫師，提供可靠與完善的術前準備，並有全天候住院照護，由受過完整培育制度的住院醫師以及住院助理時刻守護。'}
              onClick={handleMoreBtnClick} />
          </div>
        <PrimaryButton 
          title={'立即預約'}
          onClick={handleReserveBtnClick} />
        </div>     
      </div>
    </section>
  )
}

export default OfferSection;