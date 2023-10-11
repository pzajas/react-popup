import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'
import { GoMail, GoPerson } from 'react-icons/go'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { userSchema } from '../../schemas/userSchema'
import { PrimarySpinner } from '@elements/PrimarySpinner'
import { InputWithIcon } from '@elements/PrimaryInput'
import { PrimaryCheckbox } from '@elements/PrimaryCheckbox'
import { styles } from '../../styles/globalStyles'

export const PopupForm = ({ setIsFormSubmitted, setUserEmail }) => {
  const [loading, setLoading] = useState(false)
  const [color] = useState(styles.colors.white)

  const { handleSubmit, control } = useForm({
    mode: 'all',
    resolver: yupResolver(userSchema),
  })

  const onSubmit = (data) => {
    setUserEmail(data.email)
    if (data.username && data.email) {
      setLoading(true)

      setTimeout(() => {
        setIsFormSubmitted(true)
      }, 2000)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <InputWithIcon
          name="username"
          control={control}
          defaultValue="peter"
          placeholder="Imię i nazwisko"
          icon={<GoPerson />}
        />

        <InputWithIcon
          name="email"
          control={control}
          defaultValue="ppp@gmail.com"
          placeholder="E-mail"
          icon={<GoMail />}
        />
      </Container>

      <PrimaryCheckbox />

      <div className="sweet-loading">
        <SubmitButton type="submit" onSubmit={onSubmit}>
          <PrimarySpinner color={color} loading={loading} />
          {!loading ? 'Zapisz się' : null}
        </SubmitButton>
      </div>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 1536px) and (min-height: 960px) {
    align-items: flex-start;
    margin-left: 4rem;
    width: 32rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 2rem);
  align-items: center;

  @media (min-width: 1536px) and (min-height: 960px) {
    align-items: flex-start;
  }
`

const SubmitButton = styled.button`
  font-family: 'Poppins', sans-serif;
  padding: 1rem 2rem;
  background-color: ${styles.colors.blue.dark};
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2.1rem;
  color: ${styles.colors.white};
  border: none;
  text-transform: uppercase;
  border-radius: 0.2rem;
  width: calc(100vw - 3.6rem);
  height: 5.4rem;
  margin: 4rem 1.8rem 2rem 1.8rem;
  cursor: pointer;

  @media (min-width: 1536px) and (min-height: 960px) {
    width: 32rem;
    margin-top: 8rem;
    margin-left: 0;
  }
`
