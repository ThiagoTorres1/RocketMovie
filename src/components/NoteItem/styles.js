import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({theme, $isnew}) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_700};
  border: ${({theme, $isnew}) => $isnew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};
  color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 1rem;
  margin-right: 2.4rem; 
  padding: 1.6rem;


  > button {
    border: none;
    background-color: transparent; 
    color: ${({theme}) => theme.COLORS.COLOR_BRAND}; 
    
    > svg {
      width: 2.2rem;
      height: 2.2rem; 
    }
  }

  > input {
    width: 100%;
    height: 5.6rem;
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.COLORS.WHITE};

    
    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300}; 
    }
  }
`