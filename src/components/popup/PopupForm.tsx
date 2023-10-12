import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'
import { GoMail, GoPerson } from 'react-icons/go'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { userSchema } from '../../schemas/userSchema'
import { PrimaryInput } from '@elements/PrimaryInput'
import { PrimaryCheckbox } from '@elements/PrimaryCheckbox'
import { PrimaryButton } from '@elements/PrimaryButton'
import { styles } from '../../styles/styles'

interface IPopupForm {
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  setUserEmail: React.Dispatch<React.SetStateAction<string>>
  checkboxMessage: string
}

interface IData {
  username: string
  email: string
}

export const PopupForm = ({ setIsFormSubmitted, setUserEmail, checkboxMessage }: IPopupForm) => {
  const [loading, setLoading] = useState(false)

  const { handleSubmit, control } = useForm({
    mode: 'all',
    resolver: yupResolver(userSchema),
  })

  const onError = (errors) => {
    console.error('Form validation failed:', errors)
  }

  const onSubmit = (data: IData) => {
    setUserEmail(data.email)
    if (data.username && data.email) {
      setLoading(true)

      setTimeout(() => {
        setIsFormSubmitted(true)
      }, 2000)
    }
  }

  return (
    <PopupFormContainer onSubmit={handleSubmit(onSubmit, onError)}>
      <PopupInputContainer>
        <PrimaryInput
          name="username"
          control={control}
          defaultValue=""
          placeholder="Imię i nazwisko"
          icon={<GoPerson />}
        />
        <PrimaryInput name="email" control={control} defaultValue="" placeholder="E-mail" icon={<GoMail />} />
      </PopupInputContainer>

      <PrimaryCheckbox checkboxMessage={checkboxMessage} />
      <PrimaryButton onSubmit={onSubmit} loading={loading} />
    </PopupFormContainer>
  )
}

const PopupFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  @media (min-width: 1536px) and (min-height: 960px) {
    align-items: flex-start;
    margin-left: 4rem;
    width: 32rem;
  }
`

const PopupInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc(100% - 2rem);

  ::placeholder {
    color: ${styles.colors.grey};
  }

  @media (min-width: 1536px) and (min-height: 960px) {
    align-items: flex-start;
  }
`
