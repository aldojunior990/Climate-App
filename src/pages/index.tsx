import { GetStaticProps } from "next";
import { useEffect } from "react";
import { Logo } from "../components/Logo";
import { Presentation } from "../components/Presentation";
import { ResultContainer } from "../components/ResultContainer";
import { MyUseContext } from "../hooks/myUseContext";
import { Container } from "../styles/home";

interface HomeProps {
  api_key: string;
}

export default function Home({ api_key }: HomeProps) {
  const { getApiKey } = MyUseContext();

  getApiKey(api_key);

  return (
    <Container>
      <Logo />
      <Presentation />
      <ResultContainer />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const api_key = process.env.NEXT_APP_API_KEY?.toString();

  console.log(api_key);

  return {
    props: { api_key },
  };
};
