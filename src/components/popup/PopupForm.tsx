import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'
import { GoMail, GoPerson } from 'react-icons/go'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { userSchema } from '../../schemas/userSchema'
import { PrimarySpinner } from '@elements/PrimarySpinner'
import { InputWithIcon } from '@elements/PrimaryInput'
import { PrimaryCheckbox } from '@elements/PrimaryCheckbox'

export const PopupForm = ({ setIsModalVisible }) => {
  const [loading, setLoading] = useState(false)
  const [color] = useState('#ffffff')

  const { handleSubmit, control } = useForm({
    mode: 'all',
    resolver: yupResolver(userSchema),
  })

  const onSubmit = (data) => {
    if (data.username && data.email) {
      setLoading(true)

      setTimeout(() => {
        setIsModalVisible(false)
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
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 2rem);
  align-items: center;
`

const SubmitButton = styled.button`
  font-family: 'Poppins', sans-serif;
  padding: 1rem 2rem;
  background-color: #2351ff;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2.1rem;
  color: white;
  border: none;
  text-transform: uppercase;
  border-radius: 0.2rem;
  width: calc(100vw - 3.6rem);
  height: 5.4;
  margin: 4rem 1.8rem 2rem 1.8rem;
  cursor: pointer;

  &:hover {
    background-color: #1a40e5;
  }
`
