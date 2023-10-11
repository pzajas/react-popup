import { useState } from 'react'
import { styled } from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { styles } from '../styles/globalStyles'

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <CustomCheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked}>
        <FaCheck />
      </StyledCheckbox>
    </CustomCheckboxContainer>
  )
}

export const PrimaryCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <Checkbox>
      <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      <span>
        Zgadzam się na otrzymywanie drogą mailową wiadomości marketingowych oraz akceptuję politykę prywatności.
      </span>
    </Checkbox>
  )
}

const Checkbox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  color: ${styles.colors.blue.dark};
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
  margin: 2.3rem 3.6rem 0rem 3.6rem;
  width: calc(100vw - 3.6rem);

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
  grid-column: 1;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.6rem;
  margin-right: 1rem;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`

const StyledCheckbox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  margin-top: 0.5rem;
  border-radius: 0.2rem;
  background-color: ${styles.colors.blue.light};
  transition: background-color 0.3s ease-in-out;

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
