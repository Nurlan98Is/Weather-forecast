import React from 'react
import "./App.main.css"
import Aside from './aside/Aside.jsx'
import Face from './FrontSide/Face.jsx'
import { useState } from "react"

const API_KEY = '672f039e824de7e4b0034d932897cb0d';

export default function App(){
  
  const [location, setLocation] = useState('')
  const handleLocation =(event) =>{
    setLocation(event.target.value)
  }
  // weather сurrent
  const [description, setDescription] = useState('')
  const [temp, setTemp] = useState(0)
  const [tempNight, setTempNight] = useState(0)
  const [windSpeed, setWindSpeed] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [pressure, setPressure] = useState(0)
  const [visibility, setVisibility] = useState(0)
  // weather in future
  const [futureTempDay1, setFutureTempDay1] = useState(0)
  const [futureTempDay2, setFutureTempDay2] = useState(0)
  const [futureTempDay3, setFutureTempDay3] = useState(0)
  const [futureTempDay4, setFutureTempDay4] = useState(0)
  const [futureTempDay5, setFutureTempDay5] = useState(0)
  // Date future
  const [dateDay1, setDateDay1] = useState('')
  const [dateDay2, setDateDay2] = useState('')
  const [dateDay3, setDateDay3] = useState('')
  const [dateDay4, setDateDay4] = useState('')
  const [dateDay5, setDateDay5] = useState('')
  // input information
  const [city, setCity] = useState('')
  // change background 
  const [background, setBackground] = useState('')
  // change weather icons
  const [iconImage1, setIconImage1] = useState('')
  const [iconImage2, setIconImage2] = useState('')
  const [iconImage3, setIconImage3] = useState('')
  const [iconImage4, setIconImage4] = useState('')
  const [iconImage5, setIconImage5] = useState('')

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
  const API2 = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`
  
  const searchLocation = (event)=>{
    if(event.key === 'Enter'){
        const fetchData = async () =>{
            const result = await fetch(API)
            result.json()
            .then(response =>{
              console.log(response)
                setTemp(response.main.temp)
                setHumidity(response.main.humidity)
                setWindSpeed(response.wind.speed)
                setPressure(response.main.pressure)
                setVisibility(response.visibility)
                setCity(response.name)
                setBackground(response.weather[0].main)
                setDescription(response.weather[0].description)
            })
            
        }
        fetchData()
        const fetchData2 = async () =>{
          const result2 = await fetch(API2)
          result2.json()
          .then(response2 =>{
            console.log(response2)
            setTempNight(response2.list[4].main.temp)
            setFutureTempDay1(response2.list[7].main.temp)
            setFutureTempDay2(response2.list[15].main.temp)
            setFutureTempDay3(response2.list[23].main.temp)
            setFutureTempDay4(response2.list[31].main.temp)
            setFutureTempDay5(response2.list[39].main.temp)
            setDateDay1(response2.list[7].dt_txt)
            setDateDay2(response2.list[15].dt_txt)
            setDateDay3(response2.list[23].dt_txt)
            setDateDay4(response2.list[31].dt_txt)
            setDateDay5(response2.list[39].dt_txt)
            setIconImage1(response2.list[7].weather[0].main)
            setIconImage2(response2.list[15].weather[0].main)
            setIconImage3(response2.list[23].weather[0].main)
            setIconImage4(response2.list[31].weather[0].main)
            setIconImage5(response2.list[39].weather[0].main)
          })
        }
        fetchData2()
    }
  }
 
  const getBackgroundImage = (weather) =>{
    switch (weather){
      case 'Clouds':
        return 'url(Clouds.jpg)';
      case 'Clear':
        return 'url(Sunny.jpg)'
      case 'Rain':
          return 'url(Rain.jpg)'
      case 'Snow':
          return 'url(Snowfall.jpg)'
      default : 'url(Ton.jpg)'
    }
  } 
  return(
   <div >
    <div className ='app' style = {{backgroundImage: background ? getBackgroundImage(background) : 'url(Ton.jpg)' }}>
     <Aside temp = {temp} tempNight = {tempNight} windSpeed= {windSpeed}
            humidity = {humidity}
            pressure = {pressure}
            visibility = {visibility}
            handleLocation ={handleLocation}
            searchLocation={searchLocation}
            />
     <Face city = {city}
           description = {description}
           futureTempDay1={futureTempDay1}
           futureTempDay2 = {futureTempDay2}
           futureTempDay3 = {futureTempDay3}
           futureTempDay4 = {futureTempDay4}
           futureTempDay5 = {futureTempDay5}
           dateDay1 = {dateDay1}
           dateDay2 = {dateDay2}
           dateDay3 = {dateDay3}
           dateDay4 = {dateDay4}
           dateDay5 = {dateDay5}
           iconImage1 = {iconImage1}
           iconImage2 = {iconImage2}
           iconImage3 = {iconImage3}
           iconImage4 = {iconImage4}
           iconImage5 = {iconImage5}
           />
    </div>
  </div>
  )
}
