import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: .8rem;
  background-color: transparent;
  border: none;
  color: ${({theme}) => theme.COLORS.COLOR_BRAND};
`