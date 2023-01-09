import { MyUseContext } from "../../hooks/myUseContext";
import { InfosContent } from "./InfosContent";
import { Container } from "./styles";

interface dataProps {
  temperature: string;
  humidity: string;
  wind_speed: string;
  city_name: string;
  country: string;
  date: string;
  min_temp: string;
  max_temp: string;
}

export function ResultContainer() {
  const { data } = MyUseContext();

  if (data === null) return <Container></Container>;

  return (
    <Container>
      <InfosContent data={data} />
    </Container>
  );
}
