import styled from "styled-components";

export const TasksButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.color.teal};
  transition: 1s;

  &:hover {
    color: ${({ theme }) => theme.color.bondiblue};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }
`