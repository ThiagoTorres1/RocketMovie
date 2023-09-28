import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: "header" "content";
  gap: 4rem;
`

export const Form = styled.form`
  max-width: 113rem;
  margin: 0 auto;

  > header {
    margin-bottom: 4rem;
    h1 {
      margin-top: 2.4rem;
      font-size: 3.6rem;
      font-weight: 500;
    }
  }

  .flex {
    display: flex;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_200};
    margin-bottom: 2.4rem;
  }
`

export const Section = styled.div`
  display: flex;
  width: 100%;
  height: 8.8rem;
  padding: 1.6rem;
  margin-bottom: 4rem;
  border-radius: 1rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
`