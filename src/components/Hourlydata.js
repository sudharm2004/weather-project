import React from 'react'

function Hourlydata(props) {
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

     

  return (
    <div className='bg-black text-white m-2 rounded p-3'>
                            <h6 className='text-xl underline'>{formatAMPM(props.hourlyData.DateTime)}</h6>


                            <span className='text-3xl m-1'>{temperatureConversion(props.hourlyData.Temperature.Value,props.hourlyData.Temperature.Unit)}&#8451;</span>

                            <img src={`https://developer.accuweather.com/sites/default/files/${props.hourlyData.WeatherIcon<10?'0'+props.hourlyData.WeatherIcon:props.hourlyData.WeatherIcon}-s.png`} alt="logo" className='inline-block'/>

                            <h4>{props.hourlyData.IconPhrase}</h4>

                            

    </div>
  )
}

export default Hourlydata
