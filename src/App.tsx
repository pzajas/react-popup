import { Popup } from '@components/popup/Popup'
import { PopupCloseScreen } from '@components/popup/PopupCloseScreen'
import { PrimaryCounter } from '@components/popup/PopupCounter'
import { PopupForm } from '@components/popup/PopupForm'
import { PopupHeader } from '@components/popup/PopupHeader'
import { PrimaryText } from '@elements/PrimaryText'
import { checkboxMessage } from './dictionary/messages'
import { useState } from 'react'
import { styled } from 'styled-components'

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(true)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  return (
    <div>
      {isModalVisible ? (
        <Popup setIsModalVisible={setIsModalVisible}>
          <>
            {!isFormSubmitted ? (
              <>
                <PopupHeader headerTitle="10" headerSubTitle="rabatu" />
                <StyledPrimaryText text="za zapis do newslettera" />
                <PopupForm
                  setIsFormSubmitted={setIsFormSubmitted}
                  setUserEmail={setUserEmail}
                  checkboxMessage={checkboxMessage}
                />
                <StyledCountdown />
              </>
            ) : (
              <PopupCloseScreen setIsModalVisible={setIsModalVisible} userEmail={userEmail} />
            )}
          </>
        </Popup>
      ) : null}
    </div>
  )
}

export default App

const StyledPrimaryText = styled(PrimaryText)`
  @media (min-width: 1536px) and (min-height: 960px) {
    text-align: left;
    font-size: 1.6rem;
    margin-left: 4rem;
    margin-top: 0;
  }
`

const StyledCountdown = styled(PrimaryCounter)`
  @media (min-width: 1536px) and (min-height: 960px) {
    position: absolute;

    bottom: 1.5rem;
    right: 4rem;
  }
`
