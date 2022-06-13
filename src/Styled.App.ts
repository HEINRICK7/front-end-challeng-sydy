import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`
export const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 70vh;

  @media only screen and (max-width: 800px) { 
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
`
export const Section = styled.div`
  width: 100%;
  height: 20vh;
  border: 0;
  border-bottom: 1px solid #DCDCDC;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  

  @media only screen and (max-width: 800px) { 
    width: 100%;
  }
  
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    height: 30vh;
  
  }
  @media (min-width: 481px) and (max-width: 767px) {
      height: 30vh;
  }
`
export const Text = styled.h1`
  color:#161F36;
  margin-left: 8px;

`
export const P = styled.p`
  color:#B4B4B4;
  font-size: 1.4rem;
  margin-left: 8px;
  margin-top: 10px;

`
export const ContainerSection = styled.div`
  width: 30%;
  border: 2px solid #DCDCDC;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) { 
    width: 90%;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  height: 20vh;
  
  }
`
export const SectionLeft = styled.div`
  border: 0;
  border-right: 1px solid #DCDCDC;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: 800px) { 
    width: 100%;
    border: 0;
  }
`
export const SectionRight = styled.div`
  border: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  height: 100vh;
  
  }
  @media only screen and (max-width: 800px) { 
    width: 100%;
    border: 0;
  }

`