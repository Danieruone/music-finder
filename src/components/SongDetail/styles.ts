import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 20px;
  color: white;
  & div {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  & div img {
    width: 100%;
  }
`;

export const CardDetail = styled.div`
  & h1 {
    font-size: 1rem;
    font-weight: 400;
  }
  & div {
    display: flex;
    justify-content: start;
    align-items: center;
    & h1 {
      font-size: .9rem;
      font-weight: 400;
      margin: 0;
    }
    & span {
      font-size: .8rem;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;