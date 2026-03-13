import CustomHeader from "./components/Header/CustomHeader";
import JumboTron from "./components/Jumbotron/JumboTron";

const WeatherApp = () => {
  return (
    <div className="bg-neutral-900 flex flex-col gap-16 min-h-screen pt-4 px-4 pb-12 xl:pt-12 xl:px-28 xl:pb-20 text-neutral-0">
      <CustomHeader />
      <main className="self-center">
        <JumboTron text="How's the sky looking today?" />
      </main>
    </div>
  );
};

export default WeatherApp;
