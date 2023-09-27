import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  border: none;
  border-radius: 1.6rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h1 {
    flex: 1;
    font-size: 2.4rem;
    font-weight: 700;
    text-align: left;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-bottom: .8rem;
  }  

  > p {
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-family: 'roboto', serif;
    text-align: left;
    margin-top: 1.6rem;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 1.6rem;
  }
`