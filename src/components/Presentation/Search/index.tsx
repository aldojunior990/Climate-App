import { FormEvent, useState } from "react";
import { MyUseContext } from "../../../hooks/myUseContext";
import { Container } from "./styles";

export function Search() {
  const { error, setError, setSearch } = MyUseContext();
  const [value, setValue] = useState<string>("");

  function handleNewSearch(event: FormEvent) {
    event.preventDefault();
    setSearch(value);
    setValue("");
    setError(false);
  }

  return (
    <Container>
      <form onSubmit={handleNewSearch}>
        <input
          placeholder="Pesquise aqui"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <input type="submit" value="Buscar" />
      </form>
      {error && <p className="erroMessage">Cidade não encontrada!</p>}
    </Container>
  );
}
