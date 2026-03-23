import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL_GEOLOCATION;

export const geoLocationApi = axios.create({
  baseURL: `${BASE_URL}`,
});
