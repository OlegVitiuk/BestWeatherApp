import axios from "axios";

const api = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5"
});

const APIKey = "687127fe9b4d07799d1e6e8eeb3d94df";

export { api, APIKey };
