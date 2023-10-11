import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { TimeCard } from './TimeCard'
import { PrimaryText } from '@elements/PrimaryText'

interface ICountdown {
  className?: string
}

export const Countdown = ({ className }: ICountdown) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime())

  function getRemainingTime() {
    const now = new Date()
    const midnight = new Date()
    midnight.setHours(24, 0, 0, 0)
    const timeDifference = midnight - now
    return calculateTimeUnits(timeDifference)
  }

  function calculateTimeUnits(timeDifference) {
    const hours = Math.floor(timeDifference / (1000 * 60 * 60))
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(getRemainingTime())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className={className}>
      <StyledPrimaryText text={'ważne przez'} />
      <CountdownContainer>
        <TimeCard value={remainingTime.hours} text={'godzin'} />
        <TimeCard value={remainingTime.minutes} text={'minut'} />
        <TimeCard value={remainingTime.seconds} text={'sekund'} />
      </CountdownContainer>
    </div>
  )
}

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #2351ff;
  height: 9.1rem;
  width: 100%;
`
const StyledPrimaryText = styled(PrimaryText)`
  margin: 5.2rem 0rem 1.7rem 0rem;

  @media (min-width: 1536px) and (min-height: 960px) {
    text-align: right;
    margin-right: 0.8rem;
  }
`
