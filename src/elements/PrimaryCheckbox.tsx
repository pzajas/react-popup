import { useState } from 'react'
import { styled } from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { styles } from '../styles/styles'

interface IPrimaryCheckbox {
  checkboxMessage: string
}
interface ICustomCheckbox {
  checked: boolean
  onChange: () => void
}

interface IStyledCheckbox {
  checked: boolean
}

const CustomCheckbox = ({ checked, onChange }: ICustomCheckbox) => {
  return (
    <CustomCheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked}>
        <FaCheck />
      </StyledCheckbox>
    </CustomCheckboxContainer>
  )
}

export const PrimaryCheckbox = ({ checkboxMessage }: IPrimaryCheckbox) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <Checkbox>
      <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      <span>{checkboxMessage}</span>
    </Checkbox>
  )
}

const Checkbox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;

  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
  margin: 2.3rem 3.6rem 0rem 3.6rem;
  width: calc(100vw - 3.6rem);

  color: ${styles.colors.blue.dark};

  span {
    text-align: justify;
  }

  @media (min-width: 1536px) and (min-height: 960px) {
    font-size: 1rem;
    margin: 0;
    width: 32rem;
    line-height: 1.5rem;

    span {
      z-index: 999;
    }
  }
`

const CustomCheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  grid-column: 1;
  font-size: 1.6rem;
  margin-right: 1rem;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  cursor: pointer;

  opacity: 0;
`

const StyledCheckbox = styled.div<IStyledCheckbox>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;

  width: 2.4rem;
  height: 2.4rem;
  margin-top: 0.5rem;
  border-radius: 0.2rem;

  background-color: ${styles.colors.blue.light};

  svg {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    color: ${styles.colors.blue.dark};
  }

  @media (min-width: 1536px) and (min-height: 960px) {
    width: 2.2rem;
    height: 2.2rem;
    margin-top: 0.2rem;
    z-index: 999;
  }
`
