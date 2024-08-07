import styles from './photopage.module.scss'
import { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'

const PhotoPage = () => {
  const [photos, setPhotos] = useState([])

  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    500: 1
  };

  const option = {
    headers: {
      "content-type": "application/json",
      "x-api-key": "live_oanx2IT7SZUZ2DWo8lqZLTtgWxdKkBmhssGSz7iIfvcsnUmno1pwvaKdmLphPMfo"
    }
  }

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=30", option)
      .then((res) => {
        if (res.ok) {
          console.log('res:',res)
          return res.json()
        }
        throw new Error('Something error!')
      })
      .then(data => setPhotos(data))
      .catch(error => console.log('error:', error.message))
  }, [])

  useEffect(() => {
    console.log('photos:', photos)
  },[photos])

  return (
    <section className={styles.container}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.waterfall}
        columnClassName={styles.gridColumn}
      >
        {photos.length !== 0 && photos.map(photo => {
          return (
            <img src={photo.url} alt='cat_img' key={photo.id} className={styles.img} />
          )
        })}
      </Masonry>
    </section>
  )
}

export default PhotoPage