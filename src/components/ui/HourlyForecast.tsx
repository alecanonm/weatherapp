import dropDownIcon from "../../assets/images/icon-dropdown.svg";
import cloudIcon from "../../assets/images/icon-overcast.webp";

const HourlyForecast = () => {
  return (
    <section className="bg-neutral-800 flex flex-col gap-4 p-6 min-w-[384px] rounded-[20px]">
      <div className="flex justify-between items-center">
        <p className="text-[20px]/[1.2] font-semibold">Hourly forecast</p>
        <button className="flex bg-neutral-600 px-4 py-2 gap-3 rounded-lg">
          <span>Tuesday</span>
          <img
            src={dropDownIcon}
            alt="icon"
            width={12}
            height={18}
          />
        </button>
      </div>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2 bg-neutral-700 rounded-lg py-2.5 pl-4 pr-3">
          <img
            src={cloudIcon}
            alt="cloud"
            width={40}
            height={40}
          />
          <span>3 PM</span>
          <span className="ml-auto">20&deg;</span>
        </li>
        <li className="flex items-center gap-2 bg-neutral-700 rounded-lg py-2.5 pl-4 pr-3">
          <img
            src={cloudIcon}
            alt="cloud"
            width={40}
            height={40}
          />
          <span>3 PM</span>
          <span className="ml-auto">20&deg;</span>
        </li>
        <li className="flex items-center gap-2 bg-neutral-700 rounded-lg py-2.5 pl-4 pr-3">
          <img
            src={cloudIcon}
            alt="cloud"
            width={40}
            height={40}
          />
          <span>3 PM</span>
          <span className="ml-auto">20&deg;</span>
        </li>
        <li className="flex items-center gap-2 bg-neutral-700 rounded-lg py-2.5 pl-4 pr-3">
          <img
            src={cloudIcon}
            alt="cloud"
            width={40}
            height={40}
          />
          <span>3 PM</span>
          <span className="ml-auto">20&deg;</span>
        </li>
        <li className="flex items-center gap-2 bg-neutral-700 rounded-lg py-2.5 pl-4 pr-3">
          <img
            src={cloudIcon}
            alt="cloud"
            width={40}
            height={40}
          />
          <span>3 PM</span>
          <span className="ml-auto">20&deg;</span>
        </li>
        <li className="flex items-center gap-2 bg-neutral-700 rounded-lg py-2.5 pl-4 pr-3">
          <img
            src={cloudIcon}
            alt="cloud"
            width={40}
            height={40}
          />
          <span>3 PM</span>
          <span className="ml-auto">20&deg;</span>
        </li>
        <li className="flex items-center gap-2 bg-neutral-700 rounded-lg py-2.5 pl-4 pr-3">
          <img
            src={cloudIcon}
            alt="cloud"
            width={40}
            height={40}
          />
          <span>3 PM</span>
          <span className="ml-auto">20&deg;</span>
        </li>
        <li className="flex items-center gap-2 bg-neutral-700 rounded-lg py-2.5 pl-4 pr-3">
          <img
            src={cloudIcon}
            alt="cloud"
            width={40}
            height={40}
          />
          <span>3 PM</span>
          <span className="ml-auto">20&deg;</span>
        </li>
      </ul>
    </section>
  );
};

export default HourlyForecast;
