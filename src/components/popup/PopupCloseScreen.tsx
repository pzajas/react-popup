import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { styles } from '../../styles/styles'

interface IPopupCloseScreen {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  userEmail: string
}

export const PopupCloseScreen = ({ setIsModalVisible, userEmail }: IPopupCloseScreen) => {
  const countdownDuration = 4
  const [countdown, setCountdown] = useState(countdownDuration)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1)
      }

      if (countdown < 1) setIsModalVisible(false)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [countdown, setIsModalVisible])

  return (
    <PopupCloseScreenContainer>
      <StyledThankYou>Dziękujemy</StyledThankYou>

      <StyledNewsletterInfo>
        Na adres <span>{userEmail}</span> wysłaliśmy kod rabatowy.
      </StyledNewsletterInfo>

      <div>Zamknięcie za {countdown} sekund</div>
    </PopupCloseScreenContainer>
  )
}

const PopupCloseScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  height: 100%;
  margin-left: 4rem;

  color: ${styles.colors.blue.dark};

  div {
    position: absolute;
    bottom: 0;
    margin-bottom: 4rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${styles.colors.grey};
  }

  @media (min-width: 1536px) and (min-height: 960px) {
    background-color: white;
  }
`

const StyledThankYou = styled.p`
  text-transform: uppercase;

  font-size: 4.8rem;
  font-weight: 800;
  line-height: 7.2rem;
  margin-bottom: 3.8rem;
`

const StyledNewsletterInfo = styled.p`
  position: relative;

  font-size: 1.6rem;
  font-weight: 400;
  width: 30rem;

  span {
    font-weight: 600;
  }
`
