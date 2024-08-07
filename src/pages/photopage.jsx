import styles from './photopage.module.scss'
import Masonry from 'react-masonry-css'
import useSWR from 'swr'
import Loading from '../components/loading'

const option = {
  headers: {
    "content-type": "application/json",
    "x-api-key": "live_oanx2IT7SZUZ2DWo8lqZLTtgWxdKkBmhssGSz7iIfvcsnUmno1pwvaKdmLphPMfo"
  }
}

const fetcher = (...args) => fetch(...args, option).then(res => res.json())

const PhotoPage = () => {
  const { data, error, isLoading} = useSWR("https://api.thecatapi.com/v1/images/search?limit=32", fetcher, {revalidateOnFocus: false, revalidateIfStale: false})

  const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1100: 2,
    500: 1
  };

  if (error) return <div>something wrong!</div>
  if (isLoading) return <div className={styles.loading}><Loading/></div>

  return (
    <section className={styles.container}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.waterfall}
        columnClassName={styles.gridColumn}
      >
        {data.map(photo => {
          return (
            <img src={photo.url} alt='cat_img' key={photo.id} className={styles.img} />
          )
        })}
      </Masonry>
    </section>
  )
}

export default PhotoPage