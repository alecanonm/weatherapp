import sunnyIcon from "../../assets/images/icon-sunny.webp";
import useWeather from "../../hook/useWeather";

const WeatherPanel = () => {
  const { isLoading, city, currentDate, temperature } = useWeather();

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
          {temperature?.toFixed()}&deg;
        </span>
      </div>
    </section>
  );
};

export default WeatherPanel;
