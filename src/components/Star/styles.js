import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  border: none;

  > svg {
    color: ${({theme}) => theme.COLORS.COLOR_BRAND};
    width: 2rem;
    height: 2rem;
  }
`