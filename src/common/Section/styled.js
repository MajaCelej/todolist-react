import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  width: 800px;

  @media (max-width: 992px) {
      width: 500px;
    }
`;

export const SectionHeader = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.color.mercury};
  padding: 5px;
  margin: 0px 20px;
  display: flex;
  justify-content: space-between;

    @media (max-width: 992px) {
      display: grid;
      grid-template-columns: 1fr;
    }
`;

export const SectionBody = styled.div`
  padding: 15px 25px;
`;