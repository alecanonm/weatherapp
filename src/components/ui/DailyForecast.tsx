import cloudIcon from "../../assets/images/icon-partly-cloudy.webp";

const DailyForecast = () => {
  return (
    <section className="flex flex-col gap-5">
      <h3 className="text-[20px]/[1.2] font-semibold">Daily forecast</h3>
      <ul className="grid grid-cols-3 xl:grid-cols-7 gap-4">
        <li className="bg-neutral-800 flex flex-col py-4 px-2.5 gap-4 min-w-25 rounded-xl items-center ">
          <span className="text-[18px]/[1.2]">Tue</span>
          <img
            src={cloudIcon}
            width={60}
            height={60}
            alt="cloud"
          />
          <p className="flex w-full justify-between">
            <span>20&deg;</span>
            <span>14&deg;</span>
          </p>
        </li>
        <li className="bg-neutral-800 flex flex-col py-4 px-2.5 gap-4 min-w-25 rounded-xl items-center ">
          <span className="text-[18px]/[1.2]">Tue</span>
          <img
            src={cloudIcon}
            width={60}
            height={60}
            alt="cloud"
          />
          <p className="flex w-full justify-between">
            <span>20&deg;</span>
            <span>14&deg;</span>
          </p>
        </li>
        <li className="bg-neutral-800 flex flex-col py-4 px-2.5 gap-4 min-w-25 rounded-xl items-center ">
          <span className="text-[18px]/[1.2]">Tue</span>
          <img
            src={cloudIcon}
            width={60}
            height={60}
            alt="cloud"
          />
          <p className="flex w-full justify-between">
            <span>20&deg;</span>
            <span>14&deg;</span>
          </p>
        </li>
        <li className="bg-neutral-800 flex flex-col py-4 px-2.5 gap-4 min-w-25 rounded-xl items-center ">
          <span className="text-[18px]/[1.2]">Tue</span>
          <img
            src={cloudIcon}
            width={60}
            height={60}
            alt="cloud"
          />
          <p className="flex w-full justify-between">
            <span>20&deg;</span>
            <span>14&deg;</span>
          </p>
        </li>
        <li className="bg-neutral-800 flex flex-col py-4 px-2.5 gap-4 min-w-25 rounded-xl items-center ">
          <span className="text-[18px]/[1.2]">Tue</span>
          <img
            src={cloudIcon}
            width={60}
            height={60}
            alt="cloud"
          />
          <p className="flex w-full justify-between">
            <span>20&deg;</span>
            <span>14&deg;</span>
          </p>
        </li>
        <li className="bg-neutral-800 flex flex-col py-4 px-2.5 gap-4 min-w-25 rounded-xl items-center ">
          <span className="text-[18px]/[1.2]">Tue</span>
          <img
            src={cloudIcon}
            width={60}
            height={60}
            alt="cloud"
          />
          <p className="flex w-full justify-between">
            <span>20&deg;</span>
            <span>14&deg;</span>
          </p>
        </li>
        <li className="bg-neutral-800 flex flex-col py-4 px-2.5 gap-4 min-w-25 rounded-xl items-center ">
          <span className="text-[18px]/[1.2]">Tue</span>
          <img
            src={cloudIcon}
            width={60}
            height={60}
            alt="cloud"
          />
          <p className="flex w-full justify-between">
            <span>20&deg;</span>
            <span>14&deg;</span>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default DailyForecast;
