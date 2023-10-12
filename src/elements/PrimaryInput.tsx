import { cloneElement } from 'react'
import { Controller, Control, FieldValues } from 'react-hook-form'
import { BsExclamationLg } from 'react-icons/bs'
import { styled } from 'styled-components'
import { styles } from '../styles/styles'

interface IInputWithIcon {
  name: string
  control: Control<FieldValues>
  defaultValue: string
  placeholder: string
  icon: React.ReactElement
}

interface FormInputProps {
  hasError: boolean
}

export const PrimaryInput = ({ name, control, defaultValue, placeholder, icon }: IInputWithIcon) => {
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

const FormInput = styled.div<FormInputProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  place-content: center;

  .input-icon {
    position: absolute;

    top: 43%;
    left: 1.4rem;
    font-size: 2.2rem;
    margin-right: 3rem;
    transform: translateY(-50%);

    color: ${(props) => (props.hasError ? styles.colors.error : styles.colors.grey)};
  }

  .error-icon {
    position: absolute;

    top: 40%;
    right: 0.5rem;
    font-size: 2.2rem;
    transform: translateY(-50%);

    color: ${(props) => (props.hasError ? styles.colors.error : 'transparent')};
  }

  input {
    box-sizing: border-box;
    outline: none;
    font-family: 'Poppins', sans-serif;

    padding: 1rem 3.5rem 1rem 1.4rem;
    padding-left: 5rem;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    width: calc(100vw - 3.6rem);

    border: 1px solid ${(props) => (props.hasError ? styles.colors.error : styles.colors.blue.light)};
    background-color: ${styles.colors.white};
    color: ${(props) => (props.hasError ? styles.colors.error : styles.colors.black)};

    ::placeholder {
      text-align: left;

      color: ${styles.colors.error};
    }

    @media (min-width: 1536px) and (min-height: 960px) {
      width: 32rem;
    }
  }
`
