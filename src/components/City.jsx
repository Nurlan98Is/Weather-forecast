import React from 'react'
import style from '../css/City.module.css'
export default function City({props, city}){

    return(
        <div className ={style.city_container}>
            <p className ={style.city}>{city === '' ? "City..." : city}</p>
            <p className ={style.description}>{props?.description}</p>
        </div>
    )
}
