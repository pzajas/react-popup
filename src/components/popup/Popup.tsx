import styled from 'styled-components'

export const Popup = () => {
  return (
    <PopupContainer>
      <PopupContent></PopupContent>
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
  width: calc(100%);
  height: calc(100%);
  background-color: white;
  border-radius: 0.3rem;
`
