import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`
export const Cards = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 481px) and (max-width: 767px) {
  margin:20px 0;
  
  }
  
`
export const Img = styled.img`
  width: 8%;
  
`
export const Prices = styled.div`
  width: 80%;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
  border: 1px solid #DCDCDC;
  border-radius: 16px;

  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  
  color: #000000;

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    margin-top:20px;
    height: 20vh;
  
  }
  @media (min-width: 481px) and (max-width: 767px) {
  margin-top:20px;
  height: 20vh;
  
}
`
export const Span = styled.div`
  color: #DCDCDC;
  font-size: 4rem;
  font-weight: 300;

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 2.5rem;
    font-weight: 200;
  
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 3rem;
    font-weight: 200;

  }
`