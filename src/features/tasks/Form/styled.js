import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 10px;

    @media (max-width: 700px) {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
    }

    @media (max-width: 992px) { 
        grid-row-gap: 10px;
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.silver};
  width: 700px;
  padding: 10px;

    @media (max-width: 700px) {
        flex-basis: 100%;
        margin-bottom: 10px;
    }

    @media (max-width: 992px) {
        flex-basis: 100%;
    }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  border: none;
  transition: 1s;

    @media (max-width: 700px) {
        flex-basis: 100%;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color.persian};
        transform: scale(110%);
    }
`;