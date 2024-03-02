import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  max-width: 900px;
`;

export const SectionHeader = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.color.mercury};
  padding: 5px;
  margin: 0px 20px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;

export const SectionBody = styled.div`
  padding: 15px 25px;
`;