import React from "react";
import { useState, useEffect } from "react";
import Hourlydata from "./Hourlydata";
import Forecastshimmer from "./shimmer/Forecastshimmer";

function Forecast(props) {
  const [hourlyData, sethourlyData] = useState(null);
  const { location } = props;

  useEffect(() => {
    const hourlyForecastDetails = async () => {
      let response = await fetch(
        `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${location}?apikey=D4k7HzArNVZLyjZkYkprRzXGqizJo5cG`
      );
      let data = await response.json();
      sethourlyData(data);
    };
    hourlyForecastDetails();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const hourlyForecastDetails = async () => {
      let response = await fetch(
        `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${location}?apikey=D4k7HzArNVZLyjZkYkprRzXGqizJo5cG`
      );
      let data = await response.json();
      sethourlyData(data);
    };
    hourlyForecastDetails();
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [location]);

  if (hourlyData == null) {
    return <Forecastshimmer />;
  }

  return (
    <div className="weather-info bg-white rounded-md m-2 shadow-xl">
      <div className="location flex justify-between p-3 font-serif">
        <h1 className="text-4xl">Todays's Weather Forecast</h1>
      </div>
      <div className="line bg-black h-1"></div>

      <div className="displayhourlyforecast grid grid-cols-2 md:grid-cols-3">
        {hourlyData.map((element) => {
          return <Hourlydata hourlyData={element} key={element.DateTime} />;
        })}
      </div>
    </div>
  );
}

export default Forecast;
