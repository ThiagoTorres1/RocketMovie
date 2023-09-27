import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: "header" "content";
  gap: 4.8rem;

  > main {
    grid-area: content;
    overflow-y: auto;
  }
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