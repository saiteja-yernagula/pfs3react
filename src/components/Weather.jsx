import React from 'react'

import axios from 'axios'
import {useState} from 'react'

function Weather() {
    let [weather,setWeather]=useState()
    let [city,setCity]=useState('')
    async function getweather(e){
        e.preventDefault()
        console.log(city)

        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`

        
    }
  return (
    <div>
        <form action="" onSubmit={getweather}>
            <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="enter city name" />
            <button type='submit'>search</button>
        </form>
    </div>
  )
}

export default Weather