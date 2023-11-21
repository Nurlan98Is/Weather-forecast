import React from 'react'
import style from './City.module.css'
export default function City(props){
    
    return(
        <div className ={style.city_conteiner}>
            <p className ={style.city}>{props.city === '' ? "City..." : props.city}</p>
            <p className ={style.description}>{props.description}</p>
        </div>
    )
}
