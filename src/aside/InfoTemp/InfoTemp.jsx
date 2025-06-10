import React from 'react'
import style from './TempInfo.module.css'

export default function InfoTemp(props){
    
    return(
        <div className={style.conteiner_temp}>
            
            <p className = {style.text}>Current Temepature:</p>
            <p className ={style.celsius_current}>{props.temp === 0 ? 0 : Math.round(props.temp - 273)}C</p>
            <p className={style.pharyngitis_current}>{props.temp === 0 ? 0 :Math.round(1.8 * (props.temp - 273)+32)}F</p>
            <p className = {style.text}>Temperature after 12 hours:</p>
            <p className ={style.celsius_12hours}>{props.tempNight === 0 ? 0 : Math.round(props.tempNight - 273)}C</p>
            <p className={style.pharyngitis_12hours}>{props.tempNight === 0 ? 0 :Math.round(1.8 * (props.tempNight - 273)+32)}F</p>
            
        </div>
    )
}
