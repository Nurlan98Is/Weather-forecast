import React from 'react'
import style from '../css/OtherInfo.module.css'
import Barometr from '/src/assets/barometr.png'
import Wind from '/src/assets/wind.png'
import Visibility from '/src/assets/visibility.png'
import Humidity from '/src/assets/humidity.png'
export default function OtherInfo({weather}){

    const {main = {} , visibility = 0, wind = {}} = weather

    const { pressure = 0, humidity = 0,} = main

    const {speed = 0} = wind

    return(
        <div className={style.otherinfo_conteiner}>
            <hr />
            <p className ={style.wind}><img src={Wind} alt="" /> {speed} m/s SW</p>
            <hr/>
            <p className={style.humidity}><img src={Humidity} alt="Humidity" /> Humidity: {humidity} %</p>
            <hr />
            <p className ={style.pressure}><img src={Barometr} alt="Pressure" /> Pressure: {pressure} hPA</p>
            <hr />
            <p className={style.visibility}><img src={Visibility} alt="Visibility" /> Visibility: {visibility} Meters</p>
            <hr />
        </div>

    )
}