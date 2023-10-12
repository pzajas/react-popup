import styled from 'styled-components'
import { styles } from '../../styles/styles'

interface IPopupHeader {
  headerTitle: string
  headerSubTitle: string
}

export const PopupHeader = ({ headerTitle, headerSubTitle }: IPopupHeader) => {
  return (
    <Container>
      <HeaderWrapper>
        <HeaderTitle>
          {headerTitle} <div>%</div>
        </HeaderTitle>
        <HeaderSubTitle>{headerSubTitle}</HeaderSubTitle>
      </HeaderWrapper>
    </Container>
  )
}

const Container = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;

  padding-top: 3rem;
  margin-top: 1.7rem;

  color: ${styles.colors.blue.dark};

  @media (min-width: 1536px) and (min-height: 960px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin-left: 4rem;
    padding: 0;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1536px) and (min-height: 960px) {
    flex-direction: row;
    align-items: center;

    font-size: 9.6rem;
    font-weight: 800;
    line-height: 14.4rem;
  }
`

const HeaderTitle = styled.span`
  display: flex;
  align-items: center;
  word-wrap: break-word;
  position: relative;
  width: auto;

  font-size: 12.8rem;
  font-weight: 900;
  height: 9rem;

  div {
    position: absolute;

    bottom: -20%;
    right: 30%;
    font-size: 5rem;
  }

  @media (min-width: 1536px) and (min-height: 960px) {
    flex-direction: row;

    font-size: 9.6rem;
    font-weight: 800;
    line-height: 14.4rem;
    margin-right: 6rem;
    margin-top: -2rem;

    div {
      position: absolute;

      bottom: -45%;
      right: -45%;
      font-size: 5rem;
    }
  }
`

const HeaderSubTitle = styled.span`
  width: auto;
  word-wrap: break-word;
  text-align: center;

  font-size: 6.4rem;
  font-weight: 800;

  @media (min-width: 1536px) and (min-height: 960px) {
    font-size: 9.6rem;
    font-weight: 800;
    line-height: 14.4rem;
    margin-top: -2rem;
    z-index: 999;
  }
`
