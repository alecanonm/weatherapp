import { weatherApi } from "../api/weather.api";
import type { Weather } from "../interfaces/weather.interface";

export const getWeather = async (
  lat: number,
  lon: number,
): Promise<Weather> => {
  const response = await weatherApi.get<Weather>("/forecast", {
    params: {
      latitude: lat,
      longitude: lon,
      current_weather: true,
      hourly:
        "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weathercode",
      daily: "temperature_2m_max,temperature_2m_min,weathercode",
      temperature_unit: "celsius",
      wind_speed_unit: "kmh",
      precipitation_unit: "mm",
      timezone: "auto",
    },
  });

  return response.data;
};
