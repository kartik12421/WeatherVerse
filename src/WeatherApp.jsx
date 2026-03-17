import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    location: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    feelLike: 0,
    weather: "",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weatherApp">
      <div className="weatherShell">
        <p className="weatherEyebrow">Forecast dashboard</p>
        <h1 className="weatherTitle">Live Weather</h1>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
