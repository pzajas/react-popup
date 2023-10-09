import { useForm, Controller } from 'react-hook-form'
import styled from 'styled-components'

export const PopupForm = () => {
  const { handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{ required: 'Username is required' }}
          render={({ field }) => <FormInput {...field} placeholder="Imię i nazwisko" />}
        />

        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: 'Email is required' }}
          render={({ field }) => <FormInput {...field} placeholder="E-mail" />}
        />
      </Container>

      <SubmitButton type="submit">Zapisz się</SubmitButton>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  font-family: 'Poppins', sans-serif;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 2rem);
  align-items: center;
`

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #e9eeff;
  border-radius: 5px;
  background-color: white;
  box-sizing: border-box;
  width: 100%;
`

const SubmitButton = styled.button`
  font-family: 'Poppins', sans-serif;

  padding: 1rem 2rem;
  background-color: #2351ff;
  font-size: 0.8rem;
  color: white;
  border: none;
  text-transform: uppercase;
  border-radius: 0.2rem;
  width: calc(100% - 2rem);
  cursor: pointer;

  &:hover {
    background-color: #1a40e5;
  }
`
