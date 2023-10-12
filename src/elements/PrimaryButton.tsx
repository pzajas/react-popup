import { PrimarySpinner } from './PrimarySpinner'
import { styled } from 'styled-components'
import { styles } from '../styles/styles'
import { buttonSubscribeText } from '../dictionary/messages'

interface IPrimaryButton {
  onSubmit: (event: React.FormEvent) => void
  loading: boolean
}

export const PrimaryButton = ({ onSubmit, loading }: IPrimaryButton) => {
  return (
    <SubmitButton type="submit" onSubmit={onSubmit}>
      <PrimarySpinner color={styles.colors.white} loading={loading} />
      {!loading ? buttonSubscribeText : null}
    </SubmitButton>
  )
}

const SubmitButton = styled.button`
  font-family: 'Poppins', sans-serif;
  border: none;
  text-transform: uppercase;
  cursor: pointer;

  padding: 1rem 2rem;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2.1rem;
  border-radius: 0.5rem;
  width: calc(100vw - 3.6rem);
  height: 5.4rem;
  margin: 4rem 1.8rem 2rem 1.8rem;

  color: ${styles.colors.white};
  background-color: ${styles.colors.blue.dark};

  @media (min-width: 1536px) and (min-height: 960px) {
    width: 32rem;
    margin-left: 0;
  }
`
