import { PopupHeader } from './PopupHeader'
import { PopupForm } from './PopupForm'
import { Countdown } from './PopupCounter'
import { styled } from 'styled-components'

export const Popup = ({ setIsModalVisible }) => {
  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={handleCloseModal}>X</CloseButton>
        <PopupHeader headerTitle="10%" headerSubTitle="rabatu" headerText="za zapis do newslettera" />
        <PopupForm setIsModalVisible={setIsModalVisible} />
        <Countdown />
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

  background-color: white;
  border-radius: 0.3rem;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  text-align: center;
  top: 1.8rem;
  right: 1.8rem;
  width: 4rem;
  height: 4rem;
  background-color: #d4dcfc;
  color: #2351ff;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`
