import React from 'react'

function Intialerror() {
  return (
    <div className='h-screen'>
        <h1 className='m-3 text-white text-3xl'>Cannot see The result may be any one of the following may have happened:-</h1>
        <ol className='m-3 list-decimal' >
            <li className="text-white text-2xl m-4">May be you did not allowed the app to access your location </li>
            <li className="text-white text-2xl m-4">The accuweather api may be exhausted.(Only 50 calls/day for api allowed)</li>
            <li className="text-white text-2xl m-4">May be you entered a incorrect location or we were not able fetch data for given location.Refresh the page to see your current location weather conditions</li>

        </ol>
    </div>
  )
}

export default Intialerror