import React from "react";

const Forecastshimmer = () => {
  return (
    <div className="weather-info bg-white rounded-md m-2 shadow-xl">
      <div className="location flex justify-between p-3 font-serif">
        <h1 className="text-4xl">Todays's Weather Forecast</h1>
      </div>
      <div className="line bg-black h-1"></div>

      <div className="displayhourlyforecast grid grid-cols-2 md:grid-cols-3">
        <div className="bg-gray-300  m-2 rounded p-3 w-52 h-32"></div>
        <div className="bg-gray-300  m-2 rounded p-3 w-52 h-32"></div>
        <div className="bg-gray-300  m-2 rounded p-3 w-52 h-32"></div>
        <div className="bg-gray-300  m-2 rounded p-3 w-52 h-32"></div>
        <div className="bg-gray-300  m-2 rounded p-3 w-52 h-32"></div>
        <div className="bg-gray-300  m-2 rounded p-3 w-52 h-32"></div>
        <div className="bg-gray-300  m-2 rounded p-3 w-52 h-32"></div>
        <div className="bg-gray-300  m-2 rounded p-3 w-52 h-32"></div>
        <div className="bg-gray-300  m-2 rounded p-3 w-52 h-32"></div>
        <div className="bg-gray-300  m-2 rounded p-3 w-52 h-32"></div>
        <div className="bg-gray-300  m-2 rounded p-3 w-52 h-32"></div>
        <div className="bg-gray-300  m-2 rounded p-3 w-52 h-32"></div>
      </div>
    </div>
  );
};

export default Forecastshimmer;
