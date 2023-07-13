import React, { useEffect, useState } from "react";
import Axios from "axios";
import Weather from "./Weather";

function App() {
  const [search, setSearch] = useState(" -");
  const [temp, setTemp] = useState(" -");
  const [weather, setWeather] = useState(" -");
  const [city, setCity] = useState(" -");
  const [image, setImg] = useState(" -");

  function Clicked() {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_ID}`
    )
      .then((d) => {
        setWeather(d.data.weather[0].description);
        setTemp(d.data.main.temp);
        setCity(d.data.name);
        console.log(d.data.weather[0].icon);
        setImg(
          "https://openweathermap.org/img/wn/" +
            d.data.weather[0].icon +
            "@2x.png"
        );
      })
      .catch((e) => {
        alert("Type in the name of the city correctly");
        console.log(e);
      });
  }

  useEffect(() => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=bengaluru&units=metric&appid=${process.env.REACT_APP_ID}`
    )
      .then((d) => {
        setWeather(d.data.weather[0].description);
        setTemp(d.data.main.temp);
        setCity(d.data.name);
        setImg(
          `https://openweathermap.org/img/wn/${d.data.weather[0].icon}@2x.png`
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="main">
      <div className="inputDiv">
      <img src="search.png" />
          <input
            type="text"
            placeholder="Search City"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button onClick={Clicked}>Check</button>
        </div>

        <div>
          <Weather city={city} temp={temp} weather={weather} image={image} />
        </div>
    </div>
  );
}

export default App;
