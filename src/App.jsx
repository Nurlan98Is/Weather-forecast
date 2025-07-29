import React from 'react'
import "./App.main.css"
import Aside from './components/Aside.jsx'
import Face from './components/Face.jsx'
import { useState } from "react"
import ton from '../src/assets/ton.jpg'
const API_KEY = '672f039e824de7e4b0034d932897cb0d';

export default function App(){
  
  const [location, setLocation] = useState('')
  const handleLocation =(event) =>{
    setLocation(event.target.value)
  }
  console.log('location = ',location)
  const [weather, setWeather] = useState({})
  const [futureWeather, setFutureWeather] = useState({})
  const [description, setDescription] = useState('')
  console.log('futureWeather = ',futureWeather)
  // weather in future

  // Date future

  // input information
  const [city, setCity] = useState('')
  // change background
  const [background, setBackground] = useState('')
  // change weather icons

  console.log('weather in app -', weather)
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
  const API2 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`
  
  const searchLocation = async (event)=>{
    if (event.key === 'Enter') {
        try {
          const responseCurrentWeather = await fetch(API)
          const dataCurrentWeather = await responseCurrentWeather.json()
          setWeather(dataCurrentWeather)

          const responseFutureWeather = await fetch(API2)
          const dataFutureWeather = await responseFutureWeather.json()
          setFutureWeather(dataFutureWeather)
        } catch (error) {
          console.log(error)
        }

    }
  }
 
  const getBackgroundImage = (weather1) =>{
    switch (weather1){
      case 'Clouds':
        return 'url(Clouds.jpg)';
      case 'Clear':
        return 'url(Sunny.jpg)'
      case 'Rain':
          return 'url(Rain.jpg)'
      case 'Snow':
          return 'url(Snowfall.jpg)'
    }
  }
  return(
   <div >
    <div className = 'app' style = {{backgroundImage: background ? getBackgroundImage(background) : ton }}>
     <Aside weather = {weather}
            futureWeather = {futureWeather}
            location = {location}
            handleLocation = {handleLocation}
            searchLocation = {searchLocation}
            />
     <Face city = {city}
           description = {description}
           weather = {weather}
           futureWeather = {futureWeather}
           />
    </div>
  </div>
  )
}
