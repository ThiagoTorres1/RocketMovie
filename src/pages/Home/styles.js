import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: "header" "content";
  gap: 4.8rem;
`
export const Content = styled.div`
  max-width: 113rem;
  margin: 0 auto;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`

export const HeroButton = styled.button`
  display: flex;
  align-items: center;
  gap: .8rem;
  background-color: ${({theme}) => theme.COLORS.COLOR_BRAND};
  color: ${({theme}) => theme.COLORS.BACKGROUND_BODY};
  border: none;
  border-radius: .8rem;
  padding: 1.6rem 3.2rem;

  > svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`