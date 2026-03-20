import checkImage from "../../assets/images/icon-checkmark.svg";

const UnitsSwitcher = () => {
  return (
    <section className="flex flex-col border border-neutral-600 bg-neutral-800 px-2 py-1.5 rounded-xl gap-1">
      <h3 className="cursor-pointer text-[16px]/[1.2] font-medium py-2.5 px-2">
        Switch to Imperial
      </h3>
      <div className="flex flex-col gap-1">
        <p className="text-[14px]/[1.2] font-medium text-neutral-300">
          Temperature
        </p>
        <ul className="flex flex-col gap-1">
          <li className="cursor-pointer bg-neutral-700 rounded-lg flex gap-2.5 px-2 py-1.5">
            <p>Celsius (&deg;C)</p>
            <img
              src={checkImage}
              alt="check mark"
              className="ml-auto"
            />
          </li>
          <li className="hover:bg-neutral-700 rounded-lg cursor-pointer px-2 py-1.5">
            Fahrenheit (&deg;F)
          </li>
        </ul>
      </div>
      <hr className="border-neutral-600" />
      <div className="flex flex-col gap-1">
        <p className="text-[14px]/[1.2] font-medium text-neutral-300">
          Wind Speed
        </p>
        <ul className="flex flex-col gap-1">
          <li className="cursor-pointer bg-neutral-700 rounded-lg px-2 py-1.5 flex">
            <p>Km/h</p>
            <img
              src={checkImage}
              alt="check mark"
              className="ml-auto"
            />
          </li>
          <li className="hover:bg-neutral-700 rounded-lg cursor-pointer px-2 py-1.5">
            mph
          </li>
        </ul>
      </div>
      <hr className="border-neutral-600" />
      <div className="flex flex-col gap-1">
        <p className="text-[14px]/[1.2] font-medium text-neutral-300">
          Precipitation
        </p>
        <ul className="flex flex-col gap-1">
          <li className="cursor-pointer hover:bg-neutral-700 bg-neutral-700 rounded-lg px-2 py-1.5 flex gap-2.5">
            <p>Millimeters (mm)</p>
            <img
              src={checkImage}
              alt="check mark"
              className="ml-auto"
            />
          </li>
          <li className="hover:bg-neutral-700 rounded-lg  cursor-pointer px-2 py-1.5">
            Inches(in)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UnitsSwitcher;
