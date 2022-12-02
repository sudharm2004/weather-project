import React from 'react'

function Dailydata(props) {
    function temperatureConversion(temperature,unit){
        if(unit==='F')
        return ((temperature-32)*(5/9)).toFixed(2)
        else
        return temperature.toFixed(2)
    }

    function formatAMPM(date) {
        let currentDate=new Date(date);
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }

      function dayanddate(date){
        let currentDate=new Date(date);

        let day=currentDate.getDay();
        let todayDate=currentDate.getDate();
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
                            <h6 className='text-xl underline'>{dayanddate(props.dailyData.Date)}</h6>


                            <h1 className='text-6xl m-1'>{temperatureConversion(props.dailyData.Temperature.Minimum.Value,props.dailyData.Temperature.Minimum.Unit)}&#8451;</h1>

                            <img src={`https://developer.accuweather.com/sites/default/files/${props.dailyData.WeatherIcon<10?'0'+props.dailyData.WeatherIcon:props.dailyData.WeatherIcon}-s.png`} alt="logo" />

                            

    </div>
  )
}

export default Dailydata