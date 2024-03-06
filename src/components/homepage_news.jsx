import styles from '../styles/homepage_news.module.scss';
import { PrimaryButton } from './button';

const news = [{
    id:'1',
    img: '/img/news_photo_1.png',
    tagName: '診所公告',
    newsDate: '2024.01.31',
    newsTitle: '2024 春節營業時間調整公告',
    onCardClick: () => {
      alert('You click card')
    },
    onBtnClick: (event) => {
      event.stopPropagation()
      alert('You click more btn')
    }
  },
  {
    id:'2',
    img: '/img/news_photo_2.png',
    tagName: '優惠訊息',
    newsDate: '2024.01.15',
    newsTitle: '2024 健檢優惠資訊',
    onCardClick: () => {
      alert('You click card')
    },
    onBtnClick: (event) => {
      event.stopPropagation()
      alert('You click more btn')
    }
  },
  {
    id:'3',
    img: '/img/news_photo_3.png',
    tagName: '醫療新知',
    newsDate: '2024.01.12',
    newsTitle: '年節寵物飲食注意事項',
    onCardClick: () => {
      alert('You click card')
    },
    onBtnClick: (event) => {
      event.stopPropagation()
      alert('You click more btn')
    }
  },
]

const MoreButton = ({ onClick }) => { 
  return (
    <button className={styles.moreBtn} onClick={onClick}>
        <i class="fa-solid fa-arrow-right"></i>
    </button>
  )
}

const Card = ({ props }) => {
  const { img, tagName, newsDate, newsTitle, onCardClick, onBtnClick } = props
  
  return (
    <div className={styles.card} onClick={onCardClick}>
      <img src={[img]} alt="news_photo" className={styles.cardImg} />
      <div className={styles.content}>
        {(tagName === '診所公告') && <p className={styles.cardTagPost}>{tagName}</p>}
        {(tagName === '優惠訊息') && <p className={styles.cardTagInfo}>{tagName}</p>}
        {(tagName === '醫療新知') && <p className={styles.cardTagKnow}>{tagName}</p>}
        <p className={styles.cardTime}>{newsDate}</p>
        <p className={styles.cardTitle}>{newsTitle}</p>
      </div>
    <MoreButton onClick={onBtnClick} />
    </div>
  )
}


const NewsSection = () => {
  const handleMoreBtnClick = (event) => {
    alert('You click more btn')
  }

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>
            <object data="/svg/home_footprint.svg" className={styles.footprint} aria-label="footprint"> </object>
            Latest News
          </h2>
          <h3 className={styles.subtitle}>最新資訊</h3>
          <PrimaryButton title={'查看更多'} onClick={handleMoreBtnClick}/>
        </div>
        <div className={styles.body}>
          <div className={styles.cardList}>
            {news.map((newitem) => {
              return <Card props={newitem} key={newitem.id}/>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection;