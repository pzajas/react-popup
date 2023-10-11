import { styled } from 'styled-components'
import { styles } from '../styles/globalStyles'

interface IPrimaryText {
  text: string
  className?: string
}

export const PrimaryText = ({ text, className }: IPrimaryText) => {
  return <StyledPrimaryText className={className}>{text}</StyledPrimaryText>
}

const StyledPrimaryText = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  max-width: 100%;
  word-wrap: break-word;
  margin: 2.5rem 0rem 5rem 0rem;
  text-transform: uppercase;
  color: ${styles.colors.blue.dark};
`
