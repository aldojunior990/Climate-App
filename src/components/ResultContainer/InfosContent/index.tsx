import { Container } from "./styles";
import { TbWindmill } from "react-icons/tb";
import { IoWaterOutline } from "react-icons/io5";
import { BsArrowUpRightCircle, BsArrowDownLeftCircle } from "react-icons/bs";

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

interface Props {
  data: dataProps | null;
}

export function InfosContent({ data }: Props) {
  return (
    <Container>
      <div className="temp1">
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
      </div>

      <div className="temp2">
        <nav className="content">
          <div className="text">
            <p>Máxima</p>
            <h2>{data?.max_temp}°c</h2>
          </div>
          <BsArrowUpRightCircle className="icon" />
        </nav>
        <nav className="content">
          <div className="text">
            <p>Minima</p>
            <h2>{data?.min_temp}°c</h2>
          </div>
          <BsArrowDownLeftCircle className="icon" />
        </nav>
      </div>
    </Container>
  );
}
