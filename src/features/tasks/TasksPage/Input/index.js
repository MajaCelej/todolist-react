import styled from "styled-components";

export default styled.input`
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