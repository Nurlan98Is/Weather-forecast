import React from 'react'
import City from './City/City.jsx';
import style from './Face.module.css';
import   WeatherFutureDay1  from './WeatherFuture/Weatherfuture.jsx';
import { WeatherFutureDay2 } from './WeatherFuture/Weatherfuture.jsx';
import { WeatherFutureDay3 } from './WeatherFuture/Weatherfuture.jsx';
import { WeatherFutureDay4 } from './WeatherFuture/Weatherfuture.jsx';
import { WeatherFutureDay5 } from './WeatherFuture/Weatherfuture.jsx';

export default function FrontSide(props){
    return(
        <div className = {style.front_side}>
            <div className ={style.city}>
            <City city = {props.city}
              description = {props.description}/>
            </div>
            <div className = {style.future_weather}>
            <WeatherFutureDay1 futureTempDay1 = {props.futureTempDay1} dateDay1 = {props.dateDay1} iconImage1 = {props.iconImage1}/>
            <WeatherFutureDay2 futureTempDay2 = {props.futureTempDay2} dateDay2 = {props.dateDay2} iconImage2 = {props.iconImage2}/>
            <WeatherFutureDay3 futureTempDay3 = {props.futureTempDay3} dateDay3 = {props.dateDay3} iconImage3 = {props.iconImage3}/>
            <WeatherFutureDay4 futureTempDay4 = {props.futureTempDay4} dateDay4 = {props.dateDay4} iconImage4 = {props.iconImage4}/>
            <WeatherFutureDay5 futureTempDay5 = {props.futureTempDay5} dateDay5 = {props.dateDay5} iconImage5 = {props.iconImage5}/>
            </div>
        </div>
    )
}
