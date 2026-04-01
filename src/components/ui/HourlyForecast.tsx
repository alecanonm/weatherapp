import { useState } from "react";
import dropDownIcon from "../../assets/images/icon-dropdown.svg";
import DaysDropdown from "./DaysDropdown";
import { formatHour } from "../../helper/hourFormatter";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import useHourlyWeather from "../../hook/useHourlyWeather";
import { useSearchParams } from "react-router";
import { getDayOfWeek } from "../../utils/dateformat";

const HourlyForecast = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showDropdown, setShowDropdown] = useState(false);

  const defaultDate = new Date().toISOString().split("T")[0];
  const selectedDate = searchParams.get("day") || defaultDate;

  const { upcomingHours } = useHourlyWeather(selectedDate);

  const handleSelectDay = (date: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("day", date);
    setSearchParams(params);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <section className="bg-neutral-800 relative flex flex-col gap-4 p-6 min-w-[384px] rounded-[20px]">
      <div className="flex justify-between items-center">
        <p className="text-[20px]/[1.2] font-semibold">Hourly forecast</p>
        <button
          onClick={toggleDropdown}
          className="flex cursor-pointer bg-neutral-600 px-4 py-2 gap-3 rounded-lg">
          <span>{getDayOfWeek(selectedDate)}</span>
          <img
            src={dropDownIcon}
            alt="icon"
            width={12}
            height={18}
          />
        </button>

        {showDropdown && (
          <div className="absolute top-18 right-5">
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
