import React from 'react'
import style from './OtherInfo.module.css'
import Barometr from '/src/assets/barometr.png'
import Wind from '/src/assets/wind.png'
import Visibility from '/src/assets/visibility.png'
import Humidity from '/src/assets/humidity.png'
export default function OtherInfo(props){
    return(
            <div className={style.otherinfo_conteiner}>
                <hr />
                <p className ={style.wind}><img src={Wind} alt="" />{props.windSpeed}m/s SW</p>
                <hr/>
                <p className={style.humidity}><img src={Humidity} alt="Humidity" />Humidity:{props.humidity}%</p>
                <hr />
                <p className ={style.pressure}><img src={Barometr} alt="Pressure" />Pressure:{props.pressure} hPA</p>
                <hr />
                <p className={style.visibility}><img src={Visibility} alt="Visibility" />Visibility: {props.visibility}Meters</p>
                <hr />
            </div>
            
    )
}
