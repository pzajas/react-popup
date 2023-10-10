import styled from 'styled-components'

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
  background-color: #e9eeff;
  border-radius: 0.5rem;
  font-size: 4.6rem;
  font-weight: 600;
  line-height: 5.4rem;

  span {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.8rem;
  }
`
