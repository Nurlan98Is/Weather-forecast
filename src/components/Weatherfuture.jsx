import React from 'react'
import style from '../css/WeatherTime.module.css'
import ClearSky from '/src/assets/sun.png'
import Cloud from '/src/assets/cloud.png'
import Rain from '/src/assets/rain.png'
import Snowy from '/src/assets/snow.png'

export default function WeatherFutureCard({ weatherFutureArray }){
    if (!weatherFutureArray){
        return null
    }
    const { main = {}, weather = {}, dt_txt} = weatherFutureArray

    const {temp = 0} = main

    const getIconWeather = (weather) =>{
        switch (weather) {
            case 'Clear':
                return ClearSky
            case 'Clouds':
                return Cloud
            case 'Rain':
                return Rain
            case 'Snow':
                return Snowy
        }
    }
    return(
            <div className = {style.container_card}>
                <div className={style.time_f}>
                    <p>{dt_txt}</p>
                </div>
                <div className={style.icon}>
                    <p>
                        <img src={getIconWeather(weather[0]?.main)} alt="" style ={{width: 140, height: 140}} />
                    </p>
                </div>
                <div className={style.temp_f}>
                    <p>{temp === 0 ? 0 : Math.floor(temp - 273)}C</p>
                </div>
            </div>
    )
}

