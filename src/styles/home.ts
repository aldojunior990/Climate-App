import styled from "styled-components";

export const Container = styled.main`
  padding: 4rem;
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 425px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;
