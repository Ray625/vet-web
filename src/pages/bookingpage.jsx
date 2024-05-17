import styles from './bookingpage.module.scss'
import { BookingContainer, StepGroup, FormStep1, FormStep2 } from '../components/booking'
import { useTheme } from '../contexts/ThemeContext'

const BookingPage = () => {
  const { tickerOpen } = useTheme()

  return (
    <div className={styles.container} style={{paddingTop: tickerOpen ? '124px' : '80px'}}>
      <BookingContainer>
        <StepGroup />
        {/* <FormStep1 /> */}
        <FormStep2 />
      </BookingContainer>
    </div>
  )
}


export default BookingPage;