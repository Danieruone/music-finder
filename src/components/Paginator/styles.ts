import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 30px;
  & > * {
    margin: 10px;
  }
  & div {
    background-color: ${({ theme }) => theme.colors.green};
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;
