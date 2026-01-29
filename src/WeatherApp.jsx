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
    <div style={{ textAlign: "center" }}>
      <h1>Weather App by KJ</h1>
      <SearchBox updateInfo = {updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
