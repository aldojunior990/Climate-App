import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.second_background};
  border-radius: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  width: max-content;
  @media (max-width: 425px) {
    width: 100%;
  }
  .header {
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      font-weight: 400;
    }
  }

  .body {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    .temp {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.special};
      h2 {
        font-size: 4rem;
        font-weight: 700;
        @media (max-width: 425px) {
          font-size: 3rem;
        }
      }
    }

    .infos {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      margin-left: 3rem;
      @media (max-width: 425px) {
        margin-left: 1rem;
      }
      p {
        color: ${(props) => props.theme.colors.special};
        font-size: 0.8rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .icon {
          width: 1.2rem;
          height: 1.2rem;
          margin-right: 0.2rem;
        }
      }
    }
  }
`;
