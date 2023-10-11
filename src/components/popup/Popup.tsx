import { useState } from 'react'
import { PopupHeader } from './PopupHeader'
import { PopupForm } from './PopupForm'
import { Countdown } from './PopupCounter'
import { styled } from 'styled-components'
import { PopupCloseScreen } from './PopupCloseScreen'
import { PrimaryText } from '@elements/PrimaryText'
import { AiOutlineClose } from 'react-icons/ai'
import { styles } from '../../styles/globalStyles'

export const Popup = ({ setIsModalVisible }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={handleCloseModal}>
          <AiOutlineClose />
        </CloseButton>
        {!isFormSubmitted ? (
          <>
            <PopupHeader headerTitle="10" headerSubTitle="rabatu" />
            <StyledPrimaryText text="za zapis do newslettera" />
            <PopupForm setIsFormSubmitted={setIsFormSubmitted} setUserEmail={setUserEmail} />
            <StyledCountdown />
          </>
        ) : (
          <>
            <PopupCloseScreen setIsModalVisible={setIsModalVisible} userEmail={userEmail} />
          </>
        )}
      </PopupContent>
    </PopupContainer>
  )
}

const PopupContainer = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PopupContent = styled.div`
  height: calc(100vh - 1.9rem);
  width: calc(100vw - 1.9rem);
  background-color: ${styles.colors.white};
  border-radius: 0.3rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 1536px) and (min-height: 960px) {
    width: 81.8rem;
    height: 52rem;
  }
`

const CloseButton = styled.button`
  position: absolute;
  text-align: center;
  top: 0.8rem;
  right: 0.8rem;
  width: 4rem;
  height: 4rem;
  background-color: ${styles.colors.blue.light};
  color: ${styles.colors.blue.dark};
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;

  @media (min-width: 1536px) and (min-height: 960px) {
    position: absolute;
    top: 3rem;
    right: 4rem;
  }
`

const StyledPrimaryText = styled(PrimaryText)`
  @media (min-width: 1536px) and (min-height: 960px) {
    font-size: 1.6rem;
    margin-left: 4rem;
    margin-top: 0%;
    text-align: left;
  }
`

const StyledCountdown = styled(Countdown)`
  @media (min-width: 1536px) and (min-height: 960px) {
    position: absolute;

    bottom: 1.5rem;
    right: 4rem;
  }
`
