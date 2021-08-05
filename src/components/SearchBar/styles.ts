import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-bottom: 30px;
  & input {
    background-color: white;
    border: none;
    padding: 10px;
    margin-bottom: 10px;
    width: 90%;
    border-radius: 30px;
  }
  & button {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.title};
    padding: 10px;
    border-radius: 30px;
    border: none;
    width: 100%;
    cursor: pointer;
    object-fit: cover;
  }
`;
