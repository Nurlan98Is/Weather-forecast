import React from 'react'
import style from '../css/Aside.module.css'
import Input from './Input.jsx'
import InfoTemp from './InfoTemp.jsx'
import OtherInfo from './OtherInfo.jsx'

export default function Aside({ futureWeather, weather, handleLocation, location, searchLocation }){

    const { main = {} } = weather
    const { list = [] } = futureWeather
    console.log('future weather in aside',list)
    return(
        <div className={style.aside}>
            <Input handleLocation = {handleLocation} searchLocation = {searchLocation} location = {location}/>
            <InfoTemp weather = {main} futureWeather= {list[5]}/>
            <OtherInfo
            weather = {weather}
            />
        </div>
    )
} 



