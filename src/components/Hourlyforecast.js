import React from 'react'

function Hourlyforecast(props) {

    function temperatureConversion(temperature,unit){
        if(unit==='F')
        return (temperature-32)*(5/9)
        else
        return temperature
    }

    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }

      function dayanddate(date){
        let day=date.getDay();
        let todayDate=date.getDate();
        switch (day) {
            case 0:
                day='Sunday'
                break;
            case 1:
                day='Monday'
                break
            case 2:
                day='Tuesday'
                break;
            case 3:
                day='Wednesday'
                break;
            case 4:
                day='Thursday'
                break;
            case 5:
                day='Friday'
                break;
            case 6:
                day='Saturday'
                break;
            default:
                break;
        }
        return todayDate+', '+day;
      }

  return (
    <div>
                            <h6 className='text-xl underline'>{formatAMPM(props.hourlyData.DateTime)}</h6>


                            <h1 className='text-6xl m-1'>{temperatureConversion(props.hourlyData.Temperature.Value,props.hourlyData.Temperature.Unit)}&#8451;</h1>

                            <img src={`https://developer.accuweather.com/sites/default/files/${props.hourlyData.WeatherIcon<10?'0'+props.hourlyData.WeatherIcon:props.hourlyData.WeatherIcon}-s.png`} alt="logo" />

                            

    </div>
  )
}

export default Hourlyforecast