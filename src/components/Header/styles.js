import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.4rem;
  padding: 0 12.4rem;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_600};

  > a {
    h1 {
      font-size: 2.4rem;
      color: ${({theme}) => theme.COLORS.COLOR_BRAND};
    }
  }
`

export const Profile = styled.div`
  display: flex;
  gap: .8rem;
  align-items: center;
  justify-content: end;
  min-width: clamp(17rem, 5rem + 10vw, 22rem);


  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    strong {
      font-size: 1.4rem;
    }

    button {
      background: none;
      border: none;
      font-size: 1.4rem;
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

  > a {
    img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }  
  }
`