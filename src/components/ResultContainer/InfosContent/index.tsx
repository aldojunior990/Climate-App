import { Container } from "./styles";
import { TbWindmill } from "react-icons/tb";
import { IoWaterOutline } from "react-icons/io5";

interface dataProps {
  temperature: string;
  humidity: string;
  wind_speed: string;
  city_name: string;
  country: string;
  date: string;
}

interface Props {
  data: dataProps | null;
}

export function InfosContent({ data }: Props) {
  return (
    <Container>
      <div className="header">
        <h2>
          {data?.city_name}, {data?.country}
        </h2>
        <p>{data?.date}</p>
      </div>

      <div className="body">
        <nav className="temp">
          <h2>{data?.temperature}°c</h2>
        </nav>
        <nav className="infos">
          <p>
            <IoWaterOutline className="icon" />
            Umidade: {data?.humidity}%
          </p>
          <p>
            {" "}
            <TbWindmill className="icon" /> Vento: {data?.wind_speed} km/h
          </p>
        </nav>
      </div>
    </Container>
  );
}
