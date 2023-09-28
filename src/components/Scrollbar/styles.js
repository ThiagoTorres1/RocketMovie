import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: .8rem;
    height: 9.6rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.COLOR_BRAND};
    border-radius: .8rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`