import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Currentweather from './components/Currentweather';
import { useState, useEffect } from 'react';
import Forecast from './components/Forecast';

function App() {
  const [location, setlocation] = useState(null)
  useEffect(() => {
    getLocationKey();
  }, [])

  const getLocationKey = async () => {
    let response = await fetch('http://dataservice.accuweather.com/locations/v1/search?q=nashik&apikey=D4k7HzArNVZLyjZkYkprRzXGqizJo5cG')
    let data = await response.json();
    setlocation(data)
    console.log('setting location>>', location)
  }

  return (
    <div className="bg-[url('https://tse3.mm.bing.net/th?id=OIP._PrRfu0udjUb87pWUQS0IgHaEK&pid=Api&P=0')] bg-no-repeat bg-cover bg-center h-screen">

      <Navbar />

      {location&&
        <div className="main flex justify-between items-center" >

        <Currentweather location={location[0].Key} area={location[0].LocalizedName} administrativeArea={location[0].AdministrativeArea.LocalizedName} /> 

        <Forecast location={location[0].Key}/>
      </div>
      }
    </div>
  );
}

export default App;
