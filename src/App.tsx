import Header from './components/Header'
import * as C from './Styled.App'

import Cards from './components/Cards'
import Chart from './components/Chart'

import { GlobalStyled } from './Globalstyled'

import { FaBitcoin } from 'react-icons/fa'

function App() {
  return (
    <>
      <GlobalStyled />
      <C.Container>
        <Header />
        <C.Section>
          <C.ContainerSection>
          <FaBitcoin style={{fontSize: '4rem', color: 'E3AE14'}}/>
            <C.Text>Bitcoin</C.Text>
            <C.P>BTC</C.P>
          </C.ContainerSection>
        </C.Section>
        <C.Main>
          <C.SectionLeft>
            <Cards />
          </C.SectionLeft>
          <C.SectionRight>
            <Chart />
          </C.SectionRight>
        </C.Main>
      </C.Container>
    </>
  );
}

export default App;