import React from "react";

const Currentweathershimmer = () => {
  return (
    <div>
      <div className="input flex items-center">
        <input
          type="text"
          placeholder="Enter the location"
          className="m-2 w-4/5 box-border p-2 rounded-md"
        />

        <button className="bg-white h-10 w-12 rounded-md hover:bg-black hover:text-white">
          <i className="fa-solid fa-magnifying-glass-location text-xl"></i>
        </button>
      </div>
      <div className="weather-info bg-gray-300 w-80 h-60 rounded-md m-2 shadow-xl"></div>
    </div>
  );
};

export default Currentweathershimmer;
