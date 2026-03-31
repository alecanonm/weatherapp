import useWeather from "./useWeather";

const useHourlyWeather = (date: string | Date) => {
  const { weatherInfoApi } = useWeather();

  const hourlyData = weatherInfoApi?.hourly?.time?.map((time, i) => ({
    time,
    temp: weatherInfoApi.hourly.temperature_2m[i],
    code: weatherInfoApi.hourly.weathercode[i],
  }));

  const selectedDate = date.toString();

  const filteredHours = hourlyData?.filter((item) =>
    item.time.startsWith(selectedDate),
  );

  const now = new Date();

  const todayHours = filteredHours?.filter((item) => new Date(item.time) > now);

  let upcomingHours = todayHours;

  if (todayHours && todayHours.length < 8) {
    const remaining = 8 - todayHours.length;

    const nextDay = hourlyData?.filter(
      (item) => !item.time.startsWith(selectedDate),
    );

    upcomingHours = [...todayHours, ...(nextDay?.slice(0, remaining) || [])];
  } else {
    upcomingHours = todayHours?.slice(0, 8);
  }

  return { upcomingHours, hourlyData };
};

export default useHourlyWeather;
