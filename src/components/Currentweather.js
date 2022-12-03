import React, { useState, useEffect ,useRef } from 'react'

function Currentweather(props) {
    const searchInput = useRef(null)
    function changeLocation() {
        let location=searchInput.current.value;
        location=location.trim();
        location=location.toLowerCase();
        props.getLocationKey(location);
        console.log('location', location)
    }

    function formatAMPM() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    function dayanddate() {
        let date = new Date();
        let day = date.getDay();
        let todayDate = date.getDate();
        switch (day) {
            case 0:
                day = 'Sunday'
                break;
            case 1:
                day = 'Monday'
                break
            case 2:
                day = 'Tuesday'
                break;
            case 3:
                day = 'Wednesday'
                break;
            case 4:
                day = 'Thursday'
                break;
            case 5:
                day = 'Friday'
                break;
            case 6:
                day = 'Saturday'
                break;
            default:
                break;
        }
        return todayDate + ', ' + day;
    }

    useEffect(() => {
        getCurrentWeatherConditions();
    }, [])

    useEffect(() => {
      
        getCurrentWeatherConditions();
      
    }, [props.location])
    

    const [weather, setweather] = useState(null)
    const [wIcon, setwIcon] = useState(null)

    const getCurrentWeatherConditions = async () => {
        let response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${props.location}?apikey=D4k7HzArNVZLyjZkYkprRzXGqizJo5cG`)
        let data = await response.json();
        setweather(data,(data)=>{
            console.log(data)
        });

    }
    return (
        weather && <div>
            <div className="input flex items-center">

                <input ref={searchInput} type="text" placeholder='Enter the location' className='m-2 w-4/5 box-border p-2 rounded-md' />

                <button className='bg-white h-10 w-12 rounded-md hover:bg-black hover:text-white' onClick={changeLocation}>
                    <i className="fa-solid fa-magnifying-glass-location text-xl"></i>
                </button >

            </div>
            <div className="weather-info bg-white rounded-md m-2 shadow-xl">

                <div className="location flex justify-between p-3 font-serif">
                    <span>{props.area},{props.administrativeArea}</span>
                    <span>{dayanddate()}</span>
                </div>

                <div className="line bg-black h-1"></div>

                <div className='current-weather p-2 flex'>

                    <div className='weather-info'>
                        <h6 className='text-xl underline'>Current Weather</h6>

                        <span>{formatAMPM()}</span>

                        <h1 className='text-6xl m-1'>{weather != null ? weather[0].Temperature.Metric.Value : 'fetching temperature'}&#8451;</h1>

                        <span>{weather[0].WeatherText}</span>
                    </div>

                    <div className='weather-icon flex items-center'>
                        <img src={`https://developer.accuweather.com/sites/default/files/${weather[0].WeatherIcon < 10 ? '0' + weather[0].WeatherIcon : weather[0].WeatherIcon}-s.png`} alt="Weather icon" className='h-24' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Currentweather