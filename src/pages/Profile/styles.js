import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    display: flex;
    align-items: center;
    padding-left: 14.4rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 6.4rem auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -15rem auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.COLORS.COLOR_BRAND};
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      color: ${({theme}) => theme.COLORS.BACKGROUND_500};
      width: 2rem;
      height: 2rem;
    }
  }
`