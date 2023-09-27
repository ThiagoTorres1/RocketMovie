import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  gap: 4rem;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: "header" "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`

export const Content = styled.div`
  max-width: 113rem; 
  margin: 0 auto;
  > p:nth-child(7){
    margin-top: 4rem;
    text-align: justify;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 2.4rem;
`

export const Description = styled.div`
  font-family: 'Roboto', serif;
  font-weight: 400;
  margin-top: 2.4rem;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  gap: .8rem;

  > div {
    display: flex;
    align-items: center;
    gap: .8rem;
    margin-right: .8rem;

    svg {
      color: ${({theme}) => theme.COLORS.COLOR_BRAND};
    }

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }
  }
`