import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const LoadDiv = styled.div`
  padding: 36px;
  height 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`
//データが存在するならWrappedComponent、ないならLoadingを表示
export const withLoading = (WrappedComponent, fetchData) => {
  return () => {
    const[data, setData] = useState(null);
    const [theme] = useContext(ThemeContext);

    // mounting時のみ実行
    useEffect(() => {
      fetch();
    }, [])

    //データのセット
    const fetch = async () => {
      const data = await fetchData();
      setData(data);
    }

    const Loading = (
      <LoadDiv theme={theme}>ロード中...</LoadDiv>
    )

    return data ? <WrappedComponent data={data} /> : Loading;
  }
}