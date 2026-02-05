import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

  const [PickupLocation, setPickupLocation] = useState('')
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center gap-10">

  <h1 className="text-4xl md:text-4xl font-semibold">
    Luxury Cars on Rent
  </h1>

  <form
    className="flex flex-col md:flex-row items-start md:items-center justify-between
    p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200
    bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
  >
    <div className="flex flex-col md:flex-row items-start md:items-center
      gap-6 md:ml-8 w-full">
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='pickup-location' className='text-sm text-black'>Pickup Location</label>
          <select 
            required 
            id='pickup-location'
            value={PickupLocation} 
            onChange={(e) => setPickupLocation(e.target.value)}
            className={`text-sm ${!PickupLocation ? 'text-gray-500' : 'text-black'}`}
          >
            <option value="" disabled style={{ color: '#6b7280' }}>Pickup Location</option>
            {cityList.map((city) => <option key={city} value={city}>{city}</option>)}
          </select>
        </div>
        <div className='ml-6 flex flex-col items-start gap-3'>
          <label htmlFor='pickup-Date'>Pick-up Date</label>
          <input type='date' id="pickup-Date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-600'></input>
        </div>

        <div className='ml-6 flex flex-col items-start gap-2'>
          <label htmlFor='return-Date'>Return Date</label>
          <input type ='date'  id = "return-Date"  className='text-sm text-gray-500'></input>
        </div>
       
      </div>
      <button
        className="flex items-center justify-center gap-3 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer"
           >
       <img
        src={assets.search_icon}
          alt="Search"
          className="w-5 h-5"
          />
                Search
      </button>

  </form>

  <img
    src={assets.main_car}
    alt="car"
    className="max-h-70 mt-2"
  />

</div>

  )
}

export default Hero
