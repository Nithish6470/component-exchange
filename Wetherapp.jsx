import axios from 'axios'
import React, { useEffect } from 'react'
import Headerone from './Headerone'
import Temprature from './Temprature'

function Wetherapp() {
    // useEffect(()=>{
    //     navigator.geolocation.getCurrentPosition((success) => {
    //       let {latitude, longitude } = success.coords;
    //     axios(`https://api.openweathermap.org/data/2.5/onecall?lat=11.1&lon=79.6667&exclude=hourly,minutely&units=metric&appid=49cc8c821cd2aff9af04c9f98c36eb74`)
    //     .then(res=>console.log(res))
    //     })
    // })
  return (
    <>
      <Headerone/>
      <Temprature/>
    </>
  )
}

export default Wetherapp
