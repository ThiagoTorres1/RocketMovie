import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  font-family: 'Roboto', serif;
  padding: .8rem 1.6rem;
  background-color: ${({theme, $ishome}) => $ishome ? theme.COLORS.BACKGROUND_500 : theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: .8rem;
  margin-right: .8rem;
`