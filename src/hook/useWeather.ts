import { useWeatherStore } from "../store/weather.store";
import { getCurrentLocation } from "../actions/get-currentlocation.action";
import { formatDate } from "../utils/dateformat";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getGeoLocation } from "../actions/get-geolocation.action";

const useWeather = () => {
  const { fetchWeather, weather } = useWeatherStore();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const { data: searchedLocation } = useQuery({
    queryKey: ["geocoding", query],
    queryFn: () => getGeoLocation(query!),
    enabled: !!query,
    staleTime: 1000 * 60 * 10,
  });

  const { data: currentLocation } = useQuery({
    queryKey: ["currentLocation"],
    queryFn: () => getCurrentLocation(),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const lat = searchedLocation?.results?.[0]?.latitude ?? currentLocation?.lat;
  const lon = searchedLocation?.results?.[0]?.longitude ?? currentLocation?.lon;

  const { isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () => fetchWeather(lat!, lon!),
    retry: false,
    enabled: !!location,
    staleTime: 1000 * 60 * 5,
  });

  const weatherInfoApi = weather;
  const city = searchedLocation?.results?.[0].name;
  const country = searchedLocation?.results?.[0].country;
  const currentDate = formatDate(weather?.daily?.time?.[0]);
  const temperature = weather?.current_weather?.temperature;
  const windspeed = weather?.current_weather?.windspeed.toFixed();
  const precipitation = weather?.hourly?.precipitation[0];
  const feelsLike = weather?.hourly?.apparent_temperature[0].toFixed();
  const humidity = weather?.hourly?.relative_humidity_2m[0];

  return {
    isLoading,
    city,
    currentDate,
    temperature,
    windspeed,
    precipitation,
    feelsLike,
    humidity,
    weatherInfoApi,
    country,
  };
};

export default useWeather;
