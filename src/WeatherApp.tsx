import CustomHeader from "./components/Header/CustomHeader";
import JumboTron from "./components/Jumbotron/JumboTron";
import CustomSearch from "./components/Search/CustomSearch";
import DailyForecast from "./components/ui/DailyForecast";
import HourlyForecast from "./components/ui/HourlyForecast";
import WeatherInfo from "./components/ui/WeatherInfo";
import WeatherPanel from "./components/ui/WeatherPanel";

const WeatherApp = () => {
  return (
    <div className="bg-neutral-900 flex flex-col gap-16 min-h-screen pt-4 px-4 pb-12 xl:pt-12 xl:pb-20 text-neutral-0">
      <CustomHeader />
      <main className="self-center flex flex-col gap-16">
        <JumboTron text="How's the sky looking today?" />
        <section>
          <div className="flex flex-col gap-8">
            <CustomSearch />
            <div className=" grid xl:flex items-center gap-8">
              <section className="grid gap-8">
                <WeatherPanel />
                <div className="grid gap-12">
                  <WeatherInfo />
                  <DailyForecast />
                </div>
              </section>
              <HourlyForecast />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WeatherApp;
