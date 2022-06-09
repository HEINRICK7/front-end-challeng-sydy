import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #161F36;
  height: 10vh;

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  height: 20vh;
  
}
@media (min-width: 481px) and (max-width: 767px) {
  
  height: 20vh;
  
}
`
export const Text = styled.h1`
  color:#E3AE14;
  margin-left: 8px;

`