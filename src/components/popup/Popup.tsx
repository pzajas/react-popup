import { ReactNode, Dispatch } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { styled } from 'styled-components'
import { styles } from '../../styles/styles'
import backgroundImage from '../../assets/background.png'

interface IPopup {
  setIsModalVisible: Dispatch<React.SetStateAction<boolean>>
}

interface IPopup {
  setIsModalVisible: Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
}

export const Popup = ({ setIsModalVisible, children }: IPopup) => {
  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <PopupWrapper>
      <PopupContent>
        <CloseButtonWrapper onClick={handleCloseModal}>
          <CloseIcon />
        </CloseButtonWrapper>
        {children}
      </PopupContent>
    </PopupWrapper>
  )
}

const PopupWrapper = styled.div`
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

  border-radius: 0.3rem;
  position: relative;
  overflow: hidden;
  background-color: ${styles.colors.white};

  @media (min-width: 1536px) and (min-height: 960px) {
    width: 81.8rem;
    height: 52rem;

    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const CloseButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: none;
  cursor: pointer;

  top: 0.8rem;
  right: 0.8rem;
  width: 4rem;
  height: 4rem;
  border-radius: 0.3rem;

  background-color: ${styles.colors.blue.medium};
  color: ${styles.colors.blue.dark};

  @media (min-width: 1536px) and (min-height: 960px) {
    position: absolute;
    top: 3rem;
    right: 4rem;
  }
`

const CloseIcon = styled(AiOutlineClose)`
  width: 1.8rem;
  height: 1.8rem;
`
