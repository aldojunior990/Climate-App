import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  p {
    font-weight: 700;
    font-size: 1.5rem;
  }
  p:first-child {
    color: ${(props) => props.theme.colors.text};
  }
  p:last-child {
    color: ${(props) => props.theme.colors.special};
  }
`;
