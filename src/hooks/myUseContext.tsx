import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";

interface dataProps {
  temperature: string;
  humidity: string;
  wind_speed: string;
  city_name: string;
  country: string;
  date: string;
}

interface ContextData {
  search: string;
  setSearch: (search: string) => void;
  data: dataProps | null;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext<ContextData>({} as ContextData);

export function ContextProvider({ children }: ContextProviderProps) {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<dataProps | null>(null);

  useEffect(() => {
    api
      .get(`weather?q=${search}&appid=e9e87763b2eaf45045a5d47b74aaa9b4`)
      .then((response) => {
        setData({
          city_name: search,
          country: response.data.sys.country,
          humidity: response.data.main.humidity,
          wind_speed: response.data.wind.speed,
          temperature: (response.data.main.temp - 273.15)
            .toPrecision(2)
            .toString(),
          date: new Date().toLocaleDateString("pt-BR", {
            dateStyle: "full",
          }),
        });
      })
      .catch((error) => {
        console.error("Ocorreu um erro");
      });
  }, [search]);

  return (
    <Context.Provider value={{ search, setSearch, data }}>
      {children}
    </Context.Provider>
  );
}

export function MyUseContext() {
  const context = useContext(Context);
  return context;
}
