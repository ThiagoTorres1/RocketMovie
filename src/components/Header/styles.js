import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.4rem;
`

export const Profile = styled.div`
  display: flex;
  gap: .8rem;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    strong {
      font-size: 1.4rem;
    }

    a {
      font-size: 1.4rem;
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }  
`