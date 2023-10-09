import styled from 'styled-components'

export const TimeCard = ({ value, text }) => {
  return (
    <Card>
      <Value>{value}</Value>
      <span>{text}</span>
    </Card>
  )
}

const Card = styled.div`
  padding: 1rem;
  margin: 0rem 0.5rem;
  width: 4rem;
  height: 5rem;
  text-align: center;
  background-color: #e9eeff;
  border-radius: 0.5rem;
  font-weight: 700;

  span {
    font-weight: 500;
    font-size: 0.6rem;
  }
`

const Value = styled.div`
  font-size: 2rem;
`
