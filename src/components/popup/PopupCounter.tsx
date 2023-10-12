import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { TimeCard } from './TimeCard'
import { PrimaryText } from '@elements/PrimaryText'
import { styles } from '../../styles/styles'
import { getRemainingTime } from '../../utils/calculateTime'

interface ICountdown {
  className?: string
}

export const PrimaryCounter = ({ className }: ICountdown) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(getRemainingTime())
    }, 1000)

    return () => clearInterval(intervalId)
  })

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

  font-weight: 600;
  height: 9.1rem;
  width: 100%;

  color: ${styles.colors.blue.dark};
`

const StyledPrimaryText = styled(PrimaryText)`
  margin: 5.2rem 0rem 1.7rem 0rem;

  @media (min-width: 1536px) and (min-height: 960px) {
    text-align: right;
    margin-right: 0.8rem;
    color: ${styles.colors.white};
  }
`
