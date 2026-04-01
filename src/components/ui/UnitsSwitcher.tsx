import checkImage from "../../assets/images/icon-checkmark.svg";
import { useSearchParams } from "react-router";

const UnitsSwitcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tempUnit = searchParams.get("temp") || "celsius";
  const windUnit = searchParams.get("wind") || "kmh";
  const precipUnit = searchParams.get("precip") || "mm";

  const updateParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams);
  };

  return (
    <section className="flex flex-col border border-neutral-600 bg-neutral-800 px-2 py-1.5 rounded-xl gap-1">
      <h3 className="text-[16px]/[1.2] font-medium py-2.5 px-2">
        Switch to Imperial
      </h3>

      {/* TEMPERATURE */}
      <div className="flex flex-col gap-1">
        <p className="text-[14px]/[1.2] font-medium text-neutral-300">
          Temperature
        </p>

        <ul className="flex flex-col gap-1">
          <li
            onClick={() => updateParam("temp", "celsius")}
            className={`cursor-pointer rounded-lg flex gap-2.5 px-2 py-1.5 ${
              tempUnit === "celsius" ? "bg-neutral-700" : "hover:bg-neutral-700"
            }`}>
            <p>Celsius (°C)</p>
            {tempUnit === "celsius" && (
              <img
                src={checkImage}
                className="ml-auto"
              />
            )}
          </li>

          <li
            onClick={() => updateParam("temp", "fahrenheit")}
            className={`cursor-pointer rounded-lg flex px-2 py-1.5 ${
              tempUnit === "fahrenheit"
                ? "bg-neutral-700"
                : "hover:bg-neutral-700"
            }`}>
            <p>Fahrenheit (°F)</p>
            {tempUnit === "fahrenheit" && (
              <img
                src={checkImage}
                className="ml-auto"
              />
            )}
          </li>
        </ul>
      </div>

      <hr className="border-neutral-600" />

      {/* WIND */}
      <div className="flex flex-col gap-1">
        <p className="text-[14px]/[1.2] font-medium text-neutral-300">
          Wind Speed
        </p>

        <ul className="flex flex-col gap-1">
          <li
            onClick={() => updateParam("wind", "kmh")}
            className={`cursor-pointer rounded-lg px-2 py-1.5 flex ${
              windUnit === "kmh" ? "bg-neutral-700" : "hover:bg-neutral-700"
            }`}>
            <p>Km/h</p>
            {windUnit === "kmh" && (
              <img
                src={checkImage}
                className="ml-auto"
              />
            )}
          </li>

          <li
            onClick={() => updateParam("wind", "mph")}
            className={`cursor-pointer rounded-lg px-2 py-1.5 flex ${
              windUnit === "mph" ? "bg-neutral-700" : "hover:bg-neutral-700"
            }`}>
            <p>mph</p>
            {windUnit === "mph" && (
              <img
                src={checkImage}
                className="ml-auto"
              />
            )}
          </li>
        </ul>
      </div>

      <hr className="border-neutral-600" />

      {/* PRECIP */}
      <div className="flex flex-col gap-1">
        <p className="text-[14px]/[1.2] font-medium text-neutral-300">
          Precipitation
        </p>

        <ul className="flex flex-col gap-1">
          <li
            onClick={() => updateParam("precip", "mm")}
            className={`cursor-pointer rounded-lg px-2 py-1.5 flex ${
              precipUnit === "mm" ? "bg-neutral-700" : "hover:bg-neutral-700"
            }`}>
            <p>Millimeters (mm)</p>
            {precipUnit === "mm" && (
              <img
                src={checkImage}
                className="ml-auto"
              />
            )}
          </li>

          <li
            onClick={() => updateParam("precip", "inch")}
            className={`cursor-pointer rounded-lg px-2 py-1.5 flex ${
              precipUnit === "inch" ? "bg-neutral-700" : "hover:bg-neutral-700"
            }`}>
            <p>Inches (in)</p>
            {precipUnit === "inch" && (
              <img
                src={checkImage}
                className="ml-auto"
              />
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UnitsSwitcher;
