import { cloneElement } from 'react'
import { Controller } from 'react-hook-form'
import { BsExclamationLg } from 'react-icons/bs'
import { styled } from 'styled-components'
import { styles } from '../styles/globalStyles'

export const InputWithIcon = ({ name, control, defaultValue, placeholder, icon }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <FormInput hasError={!!fieldState.error}>
          {icon && cloneElement(icon, { className: 'input-icon' })}
          <input {...field} placeholder={placeholder} />
          {fieldState?.error && <BsExclamationLg className="error-icon" />}
        </FormInput>
      )}
    />
  )
}

const FormInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  place-content: center;

  .input-icon {
    position: absolute;
    top: 40%;
    left: 1.4rem;
    font-size: 2.2rem;
    transform: translateY(-50%);
    color: ${(props) => (props.hasError ? 'red' : styles.colors.blue.light)};
    margin-right: 3rem;
  }

  .error-icon {
    position: absolute;
    top: 40%;
    right: 0.5rem;
    font-size: 2.2rem;
    transform: translateY(-50%);
    color: ${(props) => (props.hasError ? 'red' : 'transparent')};
  }

  input {
    padding: 1rem 3.5rem 1rem 1.4rem;
    padding-left: 5rem;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    border: 1px solid ${(props) => (props.hasError ? 'red' : '#e9eeff')};
    border-radius: 0.5rem;
    background-color: white;
    box-sizing: border-box;
    width: calc(100vw - 3.6rem);
    outline: none;
    color: ${(props) => (props.hasError ? 'red' : 'black')};

    ::placeholder {
      color: red;
      text-align: left;
    }

    @media (min-width: 1536px) and (min-height: 960px) {
      width: 32rem;
    }
  }
`
