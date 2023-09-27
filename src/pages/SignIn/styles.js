import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.COLOR_BRAND};
  }

  > p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.GRAY_400};
    margin-bottom: 4.8rem;
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    align-self: flex-start;
    margin-bottom: 4.8rem;
  }

  > button {
    margin-top: 1.6rem;
  }

  > a {
    margin-top: 4rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.COLOR_BRAND};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`