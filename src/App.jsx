import React, {useEffect} from 'react'
import "./App.main.css"
import Aside from './components/Aside.jsx'
import Face from './components/Face.jsx'
import { useState } from "react"
import  defaultImg from '../src/assets/bgImg/DefaultImg.png'
import {ModalWindow} from "./components/ModalWindow.jsx";
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

  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false)
  console.log('futureWeather = ',futureWeather)

  // input information
  const [city, setCity] = useState('')
  // change background
  const [background, setBackground] = useState('')
  // change weather icons

  console.log('weather in app -', weather)
  const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
  const API_FUTURE_WEATHER = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`
  
  const searchLocation = async (event)=>{
    if (event.key === 'Enter') {
        try {
          const responseCurrentWeather = await fetch(API_CURRENT)
          const dataCurrentWeather = await responseCurrentWeather.json()
          setWeather(dataCurrentWeather)
          setBackground(dataCurrentWeather.weather[0].main)
          const responseFutureWeather = await fetch(API_FUTURE_WEATHER)
          const dataFutureWeather = await responseFutureWeather.json()
          setFutureWeather(dataFutureWeather)
        } catch (error) {
          console.log(error)
        }

    }
  }
  useEffect(() => {
    if(weather?.cod === '404') {
      setIsOpenModalWindow(true)
    }
  }, [weather]);

 console.log('BGIMG', background)
  const getBackgroundImage = (weather) =>{
    switch (weather){
      case 'Clouds':
        return 'url(src/assets/bgImg/Clouds.jpg)';
      case 'Clear':
        return 'url(src/assets/bgImg/Sunny.jpg'
      case 'Rain':
          return 'url(src/assets/bgImg/Rain.jpg)'
      case 'Snow':
          return 'url(src/assets/bgImg/Snowfall.jpg)'
        default:
            return 'url(src/assets/bgImg/DefaultImg.png)'
    }
  }
  return(
   <div >
     <div
         className='app'
         style={{
           background: getBackgroundImage(background)
         }}
     >
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
      {isOpenModalWindow && (
          <ModalWindow data={weather} onClose={() => {setIsOpenModalWindow(false)}}/>
      )}
    </div>
  </div>
  )
}
