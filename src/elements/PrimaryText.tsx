import { styled } from 'styled-components'
import { styles } from '../styles/styles'

interface IPrimaryText {
  text: string
  className?: string
}

export const PrimaryText = ({ text, className }: IPrimaryText) => {
  return <StyledPrimaryText className={className}>{text}</StyledPrimaryText>
}

const StyledPrimaryText = styled.div`
  text-transform: uppercase;
  text-align: center;
  word-wrap: break-word;

  font-size: 1.6rem;
  font-weight: 500;
  max-width: 100%;
  margin: 2.5rem 0rem 5rem 0rem;

  color: ${styles.colors.blue.dark};
`
