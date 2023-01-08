import { Logo } from "../components/Logo";
import { Presentation } from "../components/Presentation";
import { ResultContainer } from "../components/ResultContainer";
import { Container } from "../styles/home";

export default function Home() {
  return (
    <Container>
      <Logo />
      <Presentation />
      <ResultContainer />
    </Container>
  );
}
