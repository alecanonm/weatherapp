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

  const tempUnit = searchParams.get("temp") || "celsius";
  const windUnit = searchParams.get("wind") || "kmh";
  const precipUnit = searchParams.get("precip") || "mm";

  const { data: searchedLocation } = useQuery({
    queryKey: ["geocoding", query],
    queryFn: () => getGeoLocation(query!),
    enabled: !!query,
  });

  const { data: currentLocation } = useQuery({
    queryKey: ["currentLocation"],
    queryFn: () => getCurrentLocation(),
    retry: false,
  });

  const lat = searchedLocation?.results?.[0]?.latitude ?? currentLocation?.lat;
  const lon = searchedLocation?.results?.[0]?.longitude ?? currentLocation?.lon;

  const { isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () => fetchWeather(lat!, lon!),
    enabled: !!lat && !!lon,
  });

  const rawTemp = weather?.current_weather?.temperature;
  const rawWind = weather?.current_weather?.windspeed;
  const rawPrecip = weather?.hourly?.precipitation[0];
  const rawFeels = weather?.hourly?.apparent_temperature[0];

  const temperature =
    tempUnit === "fahrenheit" ? (rawTemp! * 9) / 5 + 32 : rawTemp;

  const feelsLike =
    tempUnit === "fahrenheit"
      ? ((rawFeels! * 9) / 5 + 32).toFixed()
      : rawFeels?.toFixed();

  const windspeed =
    windUnit === "mph" ? (rawWind! * 0.621371).toFixed() : rawWind?.toFixed();

  const precipitation =
    precipUnit === "inch" ? (rawPrecip! * 0.0393701).toFixed(2) : rawPrecip;

  return {
    isLoading,
    city: searchedLocation?.results?.[0]?.name,
    country: searchedLocation?.results?.[0]?.country,
    currentDate: formatDate(weather?.daily?.time?.[0]),
    temperature,
    feelsLike,
    windspeed,
    precipitation,
    humidity: weather?.hourly?.relative_humidity_2m[0],
    weatherInfoApi: weather,
    tempUnit,
    windUnit,
    precipUnit,
  };
};

export default useWeather;
