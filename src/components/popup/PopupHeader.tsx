import { PrimaryText } from '@elements/PrimaryText'
import styled from 'styled-components'

interface IPopupHeader {
  headerTitle: string
  headerSubTitle: string
  headerText: string
}

export const PopupHeader = ({ headerTitle, headerSubTitle, headerText }: IPopupHeader) => {
  return (
    <HeaderWrapper>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <HeaderTitle>{headerTitle}</HeaderTitle>
        <HeaderSubTitle>{headerSubTitle}</HeaderSubTitle>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PrimaryText text={headerText} />
        </div>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  color: #2351ff;
  background-color: white;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  margin-top: 1.7rem;
`

const HeaderTitle = styled.span`
  font-size: 12.8rem;
  font-weight: 900;
  width: auto;
  height: 8rem;
  display: flex;
  align-items: center;
  word-wrap: break-word;
`

const HeaderSubTitle = styled.span`
  font-size: 6.4rem;
  font-weight: 800;
  width: auto;
  word-wrap: break-word;
  text-align: center;
`
