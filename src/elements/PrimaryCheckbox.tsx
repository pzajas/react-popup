import { useState } from 'react'
import { styled } from 'styled-components'
import { FaCheck } from 'react-icons/fa'

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
  display: flex;
  align-items: center;
  color: #2351ff;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
  margin: 2.3rem 3.6rem 0rem 3.6rem;
  width: calc(100vw - 3.6rem);

  span {
    padding-left: 1rem;
    text-align: justify;
  }
`

const CustomCheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.6rem;
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
  border-radius: 0.2rem;
  background-color: #b9c4fc;
  transition: background-color 0.3s ease-in-out;

  svg {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    color: 2351ff;
  }
`
