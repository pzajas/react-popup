import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { styles } from '../../styles/globalStyles'

export const PopupCloseScreen = ({ setIsModalVisible, userEmail }) => {
  const [countdown, setCountdown] = useState(4)

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
    <CloseScreenContainer>
      <StyledThankYou>Dziękujemy</StyledThankYou>

      <StyledNewsletterInfo>
        Na adres <span>{userEmail}</span> wysłaliśmy kod rabatowy.
      </StyledNewsletterInfo>

      <div>Zamknięcie za {countdown} sekund</div>
    </CloseScreenContainer>
  )
}

const CloseScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${styles.colors.blue.dark};
  font-family: 'Poppins', sans-serif;

  div {
    position: absolute;
    bottom: 0;
    margin-bottom: 4rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${styles.colors.grey};
  }
`
const StyledThankYou = styled.p`
  font-size: 4.8rem;
  font-weight: 800;
  line-height: 7.2rem;
  margin-bottom: 3.8rem;
  text-transform: uppercase;
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
