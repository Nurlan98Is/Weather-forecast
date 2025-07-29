import React from 'react'
import style from '../css/City.module.css'
export default function City({extraDescription = {}, city}){

    const { weather = [] } = extraDescription

    return(
        <div className ={style.city_container}>
            <p className ={style.city}>{city === '' ? "City..." : city}</p>
            <p className ={style.description}>Description: {weather[0]?.description}</p>
        </div>
    )
}
