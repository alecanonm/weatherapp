import dropDownIcon from "../../assets/images/icon-dropdown.svg";
import DaysDropdown from "./DaysDropdown";
import { formatHour } from "../../helper/hourFormatter";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import useHourlyWeather from "../../hook/useHourlyWeather";
import { useSearchParams } from "react-router";

const HourlyForecast = () => {
  const { upcomingHours, hourlyData } = useHourlyWeather("23-04-2026");
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedDate = searchParams.get("day");

  const handleSelectDay = (date: string) => {
    setSearchParams({ day: date });
  };

  const toggleDropdown = () => {
    if (selectedDate) {
      searchParams.delete("day");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ day: hourlyData?.[0].time[0] || "" });
    }
  };

  console.log(selectedDate);

  return (
    <section className="bg-neutral-800 relative flex flex-col gap-4 p-6 min-w-[384px] rounded-[20px]">
      <div className="flex justify-between items-center">
        <p className="text-[20px]/[1.2] font-semibold">Hourly forecast</p>
        <button
          onClick={toggleDropdown}
          className="flex cursor-pointer bg-neutral-600 px-4 py-2 gap-3 rounded-lg">
          <span>Tuesday</span>
          <img
            src={dropDownIcon}
            alt="icon"
            width={12}
            height={18}
          />
        </button>
        {selectedDate && (
          <div className="absolute top-18 right-5 ">
            <DaysDropdown onSelectDay={handleSelectDay} />
          </div>
        )}
      </div>
      <ul className="flex flex-col gap-4">
        {upcomingHours?.map((data) => (
          <li
            key={data.time}
            className="flex items-center gap-2 bg-neutral-700 rounded-lg py-2.5 pl-4 pr-3">
            <img
              src={getWeatherIcon(data.code)}
              alt="cloud"
              width={40}
              height={40}
            />
            <span>{formatHour(data.time)}</span>
            <span className="ml-auto">{data.temp.toFixed()}&deg;</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HourlyForecast;
