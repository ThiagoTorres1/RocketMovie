import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme, $isdelete}) => $isdelete ? theme.COLORS.BACKGROUND_900 : theme.COLORS.COLOR_BRAND};
  color: ${({theme, $isdelete}) => $isdelete? theme.COLORS.COLOR_BRAND : theme.COLORS.BACKGROUND_BODY};
  border: none;
  border-radius: 1rem;
  height: 5.6rem;
  padding: 1.6rem 0;
  font-weight: 500;
`