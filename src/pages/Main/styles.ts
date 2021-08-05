import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.div`
  display: flex;
  margin: 20px 0 0 0;
  & img {
    width: 50px;
    margin-right: 20px;
  }
  & h1 {
    font-weight: 400;
    font-size: 2rem;
  }
  font-weight: 400;
  color: ${({ theme }) => theme.colors.title};
`;
