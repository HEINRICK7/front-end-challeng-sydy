import Header from './components/Header'
import * as S from './Styled.App'

import Cards from './components/Cards'
import Chart from './components/Chart'

import { GlobalStyled } from './Globalstyled'
import GlobalState from './GlobalContext/GlobalState';
import { FaBitcoin } from 'react-icons/fa'

const App = () => {

  return (
    <>
      <GlobalState>
        <GlobalStyled />
        <S.Container>
          <Header />
          <S.Section>
            <S.ContainerSection>
              <FaBitcoin style={{ fontSize: '4rem', color: 'E3AE14' }} />
              <S.Text>Bitcoin</S.Text>
              <S.P>BTC</S.P>
            </S.ContainerSection>
          </S.Section>
          <S.Main>
            <S.SectionLeft>
              <Cards />
            </S.SectionLeft>
            <S.SectionRight>
              <Chart />
            </S.SectionRight>
          </S.Main>
        </S.Container>
      </GlobalState>
    </>
  );
}

export default App;