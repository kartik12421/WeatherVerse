import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [location, setLocation] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "API_KEY";

  let handleWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${location}&appid=${API_KEY}&units=metric`
      );
      let jsonData = await response.json();
      let result = {
        location: jsonData.name,
        temp: jsonData.main.temp,
        temp_max: jsonData.main.temp_max,
        temp_min: jsonData.main.temp_min,
        humidity: jsonData.main.humidity,
        feelLike: jsonData.main.feels_like,
        weather: jsonData.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setLocation(event.target.value);
    setError(false);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLocation("");
      let newInfo = await handleWeatherInfo();
      updateInfo(newInfo);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="location"
          label="Location"
          variant="standard"
          required
          value={location}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p style={{ color: "red" }}>
            No such place available in our Database.
          </p>
        )}
      </form>
    </div>
  );
}
