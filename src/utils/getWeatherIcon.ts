import rainIcon from "../assets/images/icon-rain.webp";
import hardRainIcon from "../assets/images/icon-drizzle.webp";
import snowIcon from "../assets/images/icon-snow.webp";
import fogIcon from "../assets/images/icon-fog.webp";
import overcastIcon from "../assets/images/icon-overcast.webp";
import partlyCloudyIcon from "../assets/images/icon-partly-cloudy.webp";
import sunnyIcon from "../assets/images/icon-sunny.webp";
import stormIcon from "../assets/images/icon-storm.webp";

export const getWeatherIcon = (code: number) => {
  // ☀️ sunny | partly cloudy | overcast
  if (code === 0) return sunnyIcon;
  if (code === 1 || code === 2) return partlyCloudyIcon;
  if (code === 3) return overcastIcon;

  // 🌫️ Fog
  if (code >= 45 && code <= 48) return fogIcon;

  // 🌦️ Rain
  if (code >= 51 && code <= 57) return rainIcon;

  // 🌧️ Rain
  if (code >= 61 && code <= 67) return rainIcon;

  // ❄️ Snow
  if (code >= 71 && code <= 77) return snowIcon;

  // 🌧️ Falling cat and dogs
  if (code >= 80 && code <= 82) return hardRainIcon;

  // ⛈️ storm
  if (code >= 95) return stormIcon;

  return "❓";
};
