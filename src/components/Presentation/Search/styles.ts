import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  input {
    height: 4rem;
    outline: none;
    @media (max-width: 425px) {
      height: 3rem;
      font-size: 0.8rem;
    }
  }
  input:first-child {
    background-color: ${(props) => props.theme.colors.second_background};
    padding-left: 1rem;
    color: ${(props) => props.theme.colors.text};
    width: 80%;
    border-radius: 0.5rem 0rem 0rem 0.5rem;
    border: 0;
  }
  input:last-child {
    width: 20%;
    border-radius: 0rem 0.5rem 0.5rem 0rem;
    border: 0;
    background-color: ${(props) => props.theme.colors.special};
    font-weight: 700;
    color: ${(props) => props.theme.colors.second_background};
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      filter: brightness(1.1);
    }
  }

  .erroMessage {
    color: red;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
  }
`;
