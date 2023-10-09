import { styled } from 'styled-components'

interface IPrimaryText {
  text: string
}

export const PrimaryText = ({ text }: IPrimaryText) => {
  return <StyledPrimaryText>{text}</StyledPrimaryText>
}

const StyledPrimaryText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  max-width: 100%;
  word-wrap: break-word;
  margin: 1rem 0rem 2rem 0rem;
  text-transform: uppercase;
  color: #2351ff;
`
