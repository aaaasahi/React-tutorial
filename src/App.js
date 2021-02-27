import styled from 'styled-components';
import { useContext, useState } from 'react';
import { List } from "./List";
import { Form } from './Form';
import { getLanguages, LANG } from './const/languages';
import { withLoading } from './hoc/withLoading';
import { Modal } from './components/modal';
import { Header } from './Header';
import { ThemeContext } from './contexts/ThemeContext';

const Container = styled.div`
  height 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`


function App(data) {
  const [tab, setTab] = useState('List'); 
  const [langs, setLangs] = useState(LANG, data);

  const addLang = (lang) => {
    setLangs([...langs, lang]); //langの追加
    setTab('List'); //追加したらタブの切り替え
  }

  const [theme] = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <Header tab={tab} setTab={setTab} />
      {
        tab === 'List' ? <List langs={langs} /> : <Form onAddLang={addLang} /> 
      }
    </Container>
  );
}

export default App;
