import React from 'react'
import { useState, useEffect } from 'react'
import Hourlydata from './Hourlydata'

function Forecast(props) {

  const [hourlyData, sethourlyData] = useState(null)
 


  useEffect(() => {
    hourlyForecastDetails();
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    hourlyForecastDetails();
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [props.location])

  const hourlyForecastDetails = async () => {
    let response = await fetch(`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${props.location}?apikey=D4k7HzArNVZLyjZkYkprRzXGqizJo5cG`)
    let data = await response.json();
    sethourlyData(data);
  }


  return (
    <div>

      <div className="weather-info bg-white rounded-md m-2 shadow-xl">

        <div className="location flex justify-between p-3 font-serif">
          <h1 className='text-4xl'>Todays's Weather Forecast</h1>
        </div>
        <div className="line bg-black h-1"></div>
       

        <div className="displayhourlyforecast grid grid-cols-2 md:grid-cols-3">

          {hourlyData != null ? hourlyData.map((element) => {
            return <Hourlydata hourlyData={element} key={element.DateTime} />
          }) : "data is being fetched"}
        </div>
      </div>

    </div>
  )
}

export default Forecast
