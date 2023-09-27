import styled from "styled-components";

export const Container = styled.button`
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