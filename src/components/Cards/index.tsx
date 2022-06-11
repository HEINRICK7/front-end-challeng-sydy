import React, { useContext } from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { GlobalStateContext } from '../../GlobalContext/GlobalStateContext'
import { Spin } from 'antd';
import * as C from './styled'

import Usd from '../../assets/estados-unidos.png'
import Gbp from '../../assets/reino-unido.png'
import Uer from '../../assets/uniao-europeia .png'

const Cards: React.FC = () => {
  const { bitcoin, loading } = useContext(GlobalStateContext)
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />
  return (
    <C.Container>
      {
        loading ? (

          <C.Cards>
            {bitcoin.map((res, key) => (
              <>
                <C.Prices key={key}>
                  <img alt="usd" src={Usd} style={{ width: '8%' }} />
                  <C.Span>|</C.Span>&#36; {res.bpi.USD.rate_float.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                </C.Prices>
                <C.Prices>
                  <img alt="gbp" src={Gbp} style={{ width: '8%' }} />
                  <C.Span>|</C.Span>&pound; {res.bpi.GBP.rate_float.toLocaleString('pt-BR', { maximumFractionDigits: 2, })}
                </C.Prices>
                <C.Prices>
                  <img alt="uer" src={Uer} style={{ width: '8%' }} />
                  <C.Span>|</C.Span>&euro; {res.bpi.EUR.rate_float.toLocaleString('pt-BR', { maximumFractionDigits: 2, })}
                </C.Prices>
              </>))}
          </C.Cards>
        ) : (
          <>
            <C.Cards>
              <Spin tip="Loading..." indicator={antIcon} />
            </C.Cards>
          </>
        )
      }

    </C.Container>
  );
}

export default Cards;