import { useQuery } from "@tanstack/react-query";
import sunnyIcon from "../../assets/images/icon-sunny.webp";
import { useWeatherStore } from "../../store/weather.store";
import { getCurrentLocation } from "../../actions/get-currentlocation.action";
import { formatDate } from "../../utils/dateformat";

const WeatherPanel = () => {
  const { fetchWeather, weather } = useWeatherStore();

  const { data: location } = useQuery({
    queryKey: ["currentLocation"],
    queryFn: () => getCurrentLocation(),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const { isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: () => fetchWeather(location!.lat, location!.lon),
    retry: false,
    enabled: !!location,
    staleTime: 1000 * 60 * 5,
  });

  console.log(weather?.daily.time[0], "weaaaather");

  const city = weather?.timezone.split("/");
  const currentDate = formatDate(weather?.daily.time[0]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="bg-[url('./assets/images/bg-today-small.svg')] sm:bg-[url('./assets/images/bg-today-large.svg')]  bg-no-repeat bg-cover bg-center flex sm:flex-row flex-col justify-between items-center px-6 py-20 rounded-[20px]">
      <div className="flex flex-col gap-3">
        <h2 className="text-[28px]/[1.2] font-medium">
          {city ? city[1] : "Berlin"}, {city ? city[0] : "Germany"}
        </h2>
        <p className="text-[18px]/[1.2]">{currentDate}</p>
      </div>
      <div className="flex items-center">
        <img
          width={120}
          height={120}
          src={sunnyIcon}
          alt="sunny"
        />
        <span className="text-[96px]/[1] tracking-[-2px] italic font-semibold">
          20&deg;
        </span>
      </div>
    </section>
  );
};

export default WeatherPanel;
