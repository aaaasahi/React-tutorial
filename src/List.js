import styled from 'styled-components';
import { TabBodyContainer } from './components/tab-body-container';

//---スタイル---------------------------
const Container = styled.div`
  padding: 12px 64px;
`
const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`
//---------------------------------------

export const List = ({ langs }) => {
  return (
    <TabBodyContainer title="取り扱い言語">
      {
        langs.map((lang, index) => {
          return <ListItem key={index}>{ lang }</ListItem>
        })
      }
    </TabBodyContainer>
    
  )
}