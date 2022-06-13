import React, { useContext, useEffect } from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { GlobalStateContext } from '../../GlobalContext/GlobalStateContext'
import { Spin } from 'antd';
import * as S from './styled'

import Usd from '../../assets/estados-unidos.png'
import Gbp from '../../assets/reino-unido.png'
import Uer from '../../assets/uniao-europeia .png'

const Cards: React.FC = () => {
  const { bitcoin, loading } = useContext(GlobalStateContext)
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />
  
  useEffect(() => {
    console.log(bitcoin)
  },[bitcoin]);
  return (
    <S.Container>
      {
        loading ? (

          <S.Cards>
            {bitcoin.map((res, key) => (
              <>
                <S.Prices key={key}>
                  <S.Img alt="usd" src={Usd} />
                  <S.Span>|</S.Span>&#36; {res.bpi.USD.rate_float.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                </S.Prices>
                <S.Prices>
                  <S.Img alt="gbp" src={Gbp} />
                  <S.Span>|</S.Span>&pound; {res.bpi.GBP.rate_float.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                </S.Prices>
                <S.Prices>
                  <S.Img alt="uer" src={Uer} />
                  <S.Span>|</S.Span>&euro; {res.bpi.EUR.rate_float.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                </S.Prices>
              </>))}
          </S.Cards>
        ) : (
          <>
            <S.Cards>
              <Spin tip="Loading..." indicator={antIcon} />
            </S.Cards>
          </>
        )
      }

    </S.Container>
  );
}

export default Cards;