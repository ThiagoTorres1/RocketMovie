import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  margin-bottom: .8rem;

  > input {
    width: 100%;
    height: 5.6rem;
    border: 0;
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.WHITE};
    padding: 1.2rem;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 1.6rem;
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }
`