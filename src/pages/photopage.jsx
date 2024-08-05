import styles from './photopage.module.scss'
import { useEffect,useState } from 'react'

const PhotoPage = () => {
  const [photos, setPhotos] = useState([])

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
  },[])

  return (
    <section className={styles.container}>
      <div className={styles.photowall}>
        {photos && photos.map(photo => {
          return (
            <img src={photo.url} alt={photo.id} key={photo.id} className={styles.img} />
          )
        })}
      </div>
    </section>
  )
}

export default PhotoPage