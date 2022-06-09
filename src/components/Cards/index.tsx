import React from 'react'

import * as C from './styled'

import Usd from '../../assets/estados-unidos.png'
import Gbp from '../../assets/reino-unido.png'
import Uer from '../../assets/uniao-europeia .png'

const Cards: React.FC = () => {
  return (
    <C.Container>
      <C.Cards>
      <C.Prices>
        <img alt="usd"src={Usd} style={{width: '8%'}}/>
        <C.Span>|</C.Span>$ 178,000
      </C.Prices>
      <C.Prices>
        <img alt="gbp"src={Gbp} style={{width: '8%'}}/>
        <C.Span>|</C.Span>$ 278,000
      </C.Prices>
      <C.Prices>
        <img alt="uer"src={Uer} style={{width: '8%'}}/>
        <C.Span>|</C.Span>$ 278,000
      </C.Prices>
      </C.Cards>
    </C.Container>
  );
}

export default Cards;