import useWeather from "../../hook/useWeather";
import { getWeatherIcon } from "../../utils/getWeatherIcon";

const DailyForecast = () => {
  const { weatherInfoApi, isLoading } = useWeather();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const dailyForecast = (weatherInfoApi?.daily?.time ?? []).map((date, i) => {
    const day = new Date(date).toLocaleString("en-US", {
      weekday: "short",
    });
    return {
      day,
      max: weatherInfoApi?.daily?.temperature_2m_max[i],
      min: weatherInfoApi?.daily?.temperature_2m_min[i],
      code: weatherInfoApi?.daily?.weathercode[i],
    };
  });

  return (
    <section className="flex flex-col gap-5">
      <h3 className="text-[20px]/[1.2] font-semibold">Daily forecast</h3>
      <ul className="grid grid-cols-3 xl:grid-cols-7 gap-4">
        {dailyForecast?.map((day) => (
          <li
            key={day.day}
            className="bg-neutral-800 flex flex-col py-4 px-2.5 gap-4 min-w-25 rounded-xl items-center ">
            <span className="text-[18px]/[1.2]">{day.day}</span>
            <img
              src={getWeatherIcon(day.code!)}
              width={60}
              height={60}
              alt="cloud"
            />
            <p className="flex w-full justify-between">
              <span>{day.max!.toFixed()}&deg;</span>
              <span>{day.min?.toFixed()}&deg;</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DailyForecast;
