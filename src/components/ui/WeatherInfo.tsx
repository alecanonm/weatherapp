import useWeather from "../../hook/useWeather";

const WeatherInfo = () => {
  const {
    feelsLike,
    humidity,
    windspeed,
    precipitation,
    windUnit,
    precipUnit,
    tempUnit,
  } = useWeather();

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center items-center">
      <li className="bg-neutral-800 flex flex-col gap-6 p-5 rounded-xl min-w-45.5">
        <p className="text-[18px]/[1.2] font-medium">Feels like</p>
        <span className="text-[32px]/[1] font-light">
          {feelsLike}&deg;{tempUnit === "fahrenheit" ? "F" : "C"}
        </span>
      </li>

      <li className="bg-neutral-800 flex flex-col gap-6 p-5 rounded-xl min-w-45.5">
        <p className="text-[18px]/[1.2] font-medium">Humidity</p>
        <span className="text-[32px]/[1] font-light">{humidity}%</span>
      </li>

      <li className="bg-neutral-800 flex flex-col gap-6 p-5 rounded-xl min-w-45.5">
        <p className="text-[18px]/[1.2] font-medium">Wind</p>
        <span className="text-[32px]/[1] font-light">
          {windspeed} {windUnit === "mph" ? "mph" : "Km/h"}
        </span>
      </li>

      <li className="bg-neutral-800 flex flex-col gap-6 p-5 rounded-xl min-w-45.5">
        <p className="text-[18px]/[1.2] font-medium">Precipitation</p>
        <span className="text-[32px]/[1] font-light">
          {precipitation} {precipUnit === "inch" ? "in" : "mm"}
        </span>
      </li>
    </ul>
  );
};

export default WeatherInfo;
