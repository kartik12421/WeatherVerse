import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [location, setLocation] = useState("");
  let [error, setError] = useState("");
  const API_URL = import.meta.env.VITE_APP_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let handleWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${location}&appid=${API_KEY}&units=metric`
    );
    let jsonData = await response.json();

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("No such place available in our database.");
      }

      throw new Error(jsonData.message || "Unable to fetch weather data.");
    }

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
  };

  let handleChange = (event) => {
    setLocation(event.target.value);
    setError("");
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let newInfo = await handleWeatherInfo();
      updateInfo(newInfo);
      setLocation("");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="searchBox">
      <div className="searchCard">
        <form className="searchForm" onSubmit={handleSubmit}>
          <TextField
            id="location"
            label="Location"
            variant="outlined"
            size="small"
            required
            value={location}
            onChange={handleChange}
            className="searchInput"
            placeholder="City, country or ZIP"
            inputProps={{ 'aria-label': 'Location' }}
          />

          <Button
            variant="contained"
            type="submit"
            className="searchButton"
            aria-label="Search"
          >
            <svg className="searchIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Search
          </Button>
        </form>

        {error && <p className="searchError">{error}</p>}
      </div>
    </div>
  );
}
