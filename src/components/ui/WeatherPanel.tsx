import sunnyIcon from "../../assets/images/icon-sunny.webp";

const WeatherPanel = () => {
  return (
    <div className="bg-[url('./assets/images/bg-today-small.svg')] xl:bg-[url('./assets/images/bg-today-large.svg')] flex justify-between items-center px-6 py-20 rounded-[20px]">
      <div className="flex flex-col gap-3">
        <h2 className="text-[28px]/[1.2] font-medium">Berling, Germany</h2>
        <p className="text-[18px]/[1.2]">Tuesday, Aug 5, 2025</p>
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
    </div>
  );
};

export default WeatherPanel;
