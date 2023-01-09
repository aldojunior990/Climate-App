import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .temp1 {
    background-color: ${(props) => props.theme.colors.second_background};
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
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
  }

  .temp2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    @media (max-width: 425px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .content {
      border-radius: 0.5rem;
      background-color: ${(props) => props.theme.colors.second_background};
      display: flex;
      align-items: flex-start;
      justify-content: space-evenly;
      padding: 1rem;
      @media (max-width: 768px) {
        align-items: center;
        justify-content: space-between;
      }
      .icon {
        width: 2.5rem;
        height: 2.5rem;
        color: ${(props) => props.theme.colors.special};
        margin-left: 2rem;
        @media (max-width: 425px) {
          margin: 0;
          width: 2rem;
          height: 2rem;
        }
      }

      .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: end;
        height: 100%;
        p {
          font-size: 1.5rem;
          font-weight: 400;
        }
        h2 {
          font-size: 4rem;
          color: ${(props) => props.theme.colors.special};
          @media (max-width: 425px) {
            font-size: 3rem;
          }
        }
      }
    }
  }
`;
