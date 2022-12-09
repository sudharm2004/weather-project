import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Currentweather from './components/Currentweather';
import { useState, useEffect } from 'react';
import Forecast from './components/Forecast';
import Intialerror from './components/Intialerror';

function App() {
  const [coords, setcoords] = useState(null)
  const [location, setlocation] = useState(null)
  useEffect(() => {
    const userLocation=navigator.geolocation;

    userLocation.getCurrentPosition((data)=>{

      setcoords({latitude:data.coords.latitude,longitude:data.coords.longitude})

    })

  }, [])

  useEffect(() => {
    try {
      
      const currentlocation=async ()=>{
        let response = await fetch(`https://dataservice.accuweather.com/locations/v1/search?q=${coords.latitude},${coords.longitude}&apikey=D4k7HzArNVZLyjZkYkprRzXGqizJo5cG`);
        let data = await response.json();
        setlocation(data)
        console.log('setting location>>', location)
      }
      currentlocation();
    } catch (error) {
      alert('Sorry!!we are unable to find the given location')
    }

  }, [coords])
  

  const getLocationKey = async (location) => {
    try {
      
      let response = await fetch(`https://dataservice.accuweather.com/locations/v1/search?q=${location}&apikey=D4k7HzArNVZLyjZkYkprRzXGqizJo5cG`);
      let data = await response.json();
      setlocation(data)
      console.log('setting location>>', location)
    } catch (error) {
      alert('we were not able to find your current location')
    }
  }

  return (
    <div className="bg-[url('https://tse3.mm.bing.net/th?id=OIP._PrRfu0udjUb87pWUQS0IgHaEK&pid=Api&P=0')] bg-no-repeat bg-cover bg-center">

      <Navbar />

      {location!=null?
        <div className="main flex flex-col justify-around items-center md:flex-row m-t-2 " >

        <Currentweather location={location[0].Key} area={location[0].LocalizedName} administrativeArea={location[0].AdministrativeArea.LocalizedName} getLocationKey={getLocationKey}/> 

        <Forecast location={location[0].Key}/>

        
      </div>
      :
      <Intialerror/>
      }
    </div>
  );
}

export default App;
