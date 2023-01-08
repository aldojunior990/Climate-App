import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ContextProvider } from "../hooks/myUseContext";
import { GlobalStyle } from "../styles/global";
import light from "../styles/themes/light";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextProvider>
  );
}
