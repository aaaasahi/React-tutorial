import styled from 'styled-components';
import { Button } from './components/button';
import { useContext } from 'react';
import { ThemeContext } from "./contexts/ThemeContext";


const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'}
`
const HeaderButton = styled(Button)`
  padding: 0px;
  margin-bottom: 4px;
`

export const Header = ({tab, setTab}) => {
  const [ theme, toggleTheme ] = useContext(ThemeContext);
  return (
    <Container>
        <HeaderUl>
          <HeaderLi focused={tab === 'List'} onClick={() => setTab('List')}>リスト</HeaderLi>
          <HeaderLi focused={tab === 'Form'} onClick={() => setTab('Form')}>フォーム</HeaderLi>
        </HeaderUl>
        <HeaderButton onClick={toggleTheme}>テーマ変更</HeaderButton>
      </Container>
  )
}