import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api, { get } from "../services/api";

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

interface ContextData {
  search: string;
  setSearch: (search: string) => void;
  data: dataProps | null;
  error: boolean;
  setError: (error: boolean) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext<ContextData>({} as ContextData);

export function ContextProvider({ children }: ContextProviderProps) {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<dataProps | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (search === "") return;
    get();
    api
      .get(`weather?q=${search}&appid=${process.env.NEXT_APP_API_KEY}`)
      .then((response) => {
        setData({
          city_name: search,
          country: response.data.sys.country,
          humidity: response.data.main.humidity,
          wind_speed: response.data.wind.speed,
          max_temp: (response.data.main.temp_max - 273.15)
            .toPrecision(2)
            .toString(),
          min_temp: (response.data.main.temp_min - 273.15)
            .toPrecision(2)
            .toString(),
          temperature: (response.data.main.temp - 273.15)
            .toPrecision(2)
            .toString(),
          date: new Date().toLocaleDateString("pt-BR", {
            dateStyle: "full",
          }),
        });
      })
      .catch((error) => {
        setError(true);
      });
  }, [search]);

  return (
    <Context.Provider value={{ search, setSearch, data, error, setError }}>
      {children}
    </Context.Provider>
  );
}

export function MyUseContext() {
  const context = useContext(Context);
  return context;
}
