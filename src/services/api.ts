import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export function get() {
  api
    .get(`weather?q=São Paulo&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
      console.log(response);
    });
}

export default api;
