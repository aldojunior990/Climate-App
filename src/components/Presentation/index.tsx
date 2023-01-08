import { Search } from "./Search";
import { Container } from "./styles";

export function Presentation() {
  return (
    <Container>
      <div className="box1">
        <p>
          Explore as condições climaticas <br /> de qualquer região no planeta!
        </p>
        <Search />
      </div>

      <img src="image.svg" alt="" />
    </Container>
  );
}
