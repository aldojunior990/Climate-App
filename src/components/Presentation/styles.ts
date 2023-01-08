import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    .box1 {
      width: 100%;
    }
  }
  p {
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text};
    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
    @media (max-width: 425px) {
      font-size: 1.2rem;
    }
  }

  img {
    width: 37.5rem;
    height: 18.75rem;
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;
