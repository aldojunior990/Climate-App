import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
        
    }
    a{
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }
    body{
        background-color: ${(props) => props.theme.colors.primary};
        border: 1px solid red;
        input {
        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }   

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
`;
