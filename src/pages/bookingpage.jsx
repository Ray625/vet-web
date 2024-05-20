import styles from './bookingpage.module.scss'
import { BookingContainer, StepGroup, FormStep1, FormStep2, FormStep3, FormStep4 } from '../components/booking'
import { useTheme } from '../contexts/ThemeContext'
import { useState, useEffect } from 'react'

const BookingPage = () => {
  const { tickerOpen } = useTheme()
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep(s => s + 1)
  }

  const handlePrevStep = () => {
    setStep(s => s - 1)
  }

  const handleSubmit = () => {
    alert('submit')
    setStep(s => s + 1)
  }

  useEffect(() => {
    if (step) {
      window.scrollTo(0, 0);
    }
  }, [step])

  return (
    <div className={styles.container} style={{paddingTop: tickerOpen ? '124px' : '80px'}}>
      <BookingContainer>
        <StepGroup step={step} />
        {step === 1 && <FormStep1 handleNextStep={handleNextStep} />}
        {step === 2 && <FormStep2
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />}
        {step === 3 && <FormStep3
          handlePrevStep={handlePrevStep}
          handleSubmit={handleSubmit}
        />} 
        {step === 4 && <FormStep4 />}
      </BookingContainer>
    </div>
  )
}


export default BookingPage;