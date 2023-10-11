import styled from 'styled-components'
import { styles } from '../../styles/globalStyles'

export const TimeCard = ({ value, text }) => {
  return (
    <Card>
      <div>{value}</div>
      <span>{text}</span>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1rem;
  margin: 0rem 0.5rem;
  width: 8.16rem;
  height: 9.1rem;
  background-color: ${styles.colors.blue.light};
  border-radius: 0.5rem;
  font-size: 4.6rem;
  font-weight: 600;
  line-height: 5.4rem;

  span {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.8rem;
  }

  @media (min-width: 1536px) and (min-height: 960px) {
    height: 6.4rem;
    width: 5.7rem;
    font-size: 2.4rem;
    line-height: 3.6rem;
    background-color: ${styles.colors.blue.dark};
    color: ${styles.colors.white};
  }
`
