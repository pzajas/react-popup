import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { TimeCard } from './TimeCard'
import { PrimaryText } from '@elements/PrimaryText'

export const Countdown = () => {
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
    <div>
      <PrimaryText text={'ważne przez'} />
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
  margin-top: 50px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #2351ff;
`