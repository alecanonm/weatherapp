const WeatherInfo = () => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-6  justify-center items-center">
      <div className="bg-neutral-800 flex flex-col gap-6 p-5 rounded-xl min-w-45.5">
        <p className="text-[18px]/[1.2] font-medium">Feels like</p>
        <span className="text-[32px]/[1] font-light">18&deg;</span>
      </div>
      <div className="bg-neutral-800 flex flex-col gap-6 p-5 rounded-xl min-w-45.5">
        <p className="text-[18px]/[1.2] font-medium">Humidity</p>
        <span className="text-[32px]/[1] font-light">46%</span>
      </div>
      <div className="bg-neutral-800 flex flex-col gap-6 p-5 rounded-xl min-w-45.5">
        <p className="text-[18px]/[1.2] font-medium">Wind</p>
        <span className="text-[32px]/[1] font-light">14 Km/h</span>
      </div>
      <div className="bg-neutral-800 flex flex-col gap-6 p-5 rounded-xl min-w-45.5">
        <p className="text-[18px]/[1.2] font-medium">Precipitation</p>
        <span className="text-[32px]/[1] font-light">0 mm</span>
      </div>
    </section>
  );
};

export default WeatherInfo;
