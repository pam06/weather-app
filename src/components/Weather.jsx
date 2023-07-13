import React from "react";

function Weather(props) {
  return (
    <div className="outputDiv">
      <div className="outputDivTemp">
        {/* <p>City = {props.city ? props.city : "loading..."}</p> */}
        <h2>Temperature</h2>
        <img src="temperature.png" alt="" />
        <p><h1>{props.temp ? props.temp : "loading..."}</h1>degree celsius</p>
      </div>
      <div className="outputDivWeather">
        <h2>Weather Condition</h2>
          <p>{props.weather ? props.weather : "loading..."}
        </p>
        <img src={props.image ? props.image : "loading..."} alt="" />
        
      </div>
    </div>
  );
}

export default Weather;
