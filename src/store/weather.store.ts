import { create } from "zustand";
import type { Weather } from "../interfaces/weather.interface";
import { getWeather } from "../actions/get-weather.action";

type WeatherStore = {
  //Properties
  weather: Weather | null;
  loading: boolean;
  error: string | null;
  //Getters
  //Actions
  fetchWeather: (lat: number, lon: number) => Promise<Weather | null>;
};

export const useWeatherStore = create<WeatherStore>()((set) => ({
  // store implementation
  weather: null,
  loading: false,
  error: null,

  fetchWeather: async (lat, lon) => {
    try {
      set({ loading: true, error: null });

      const data = await getWeather(lat, lon);

      set({
        weather: data,
        loading: false,
      });

      return data;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      set({
        error: "Failed to fetch weather",
        loading: false,
      });

      return null;
    }
  },
}));
