import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  justify-content: center;
  grid-gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: 350px;
  }
`;