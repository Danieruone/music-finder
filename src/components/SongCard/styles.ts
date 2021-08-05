import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  width: 50%;
  cursor: pointer;
  & img {
    width: 100px;
    margin-right: 20px;
  }
  & div {
    width: 100%;
  }
  & div h2 {
    font-weight: 400;
    margin: 5px 0px 5px 0px;
    font-size: 1rem;
    color: white;
  }
  &:hover{
    background-color: #262626;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
