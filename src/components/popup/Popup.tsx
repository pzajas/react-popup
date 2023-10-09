import { PopupHeader } from '@components/header/PopupHeader'
import { PopupForm } from './PopupForm'
import { Countdown } from './PopupCounter'

import { styled } from 'styled-components'

export const Popup = () => {
  return (
    <PopupContainer>
      <PopupContent>
        <PopupHeader headerTitle="10%" headerSubTitle="rabatu" headerText="za zapis do newslettera" />
        <PopupForm />
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
  /* width: calc(100%);*/
  height: calc(100%);
  background-color: white;
  border-radius: 0.3rem;
`
