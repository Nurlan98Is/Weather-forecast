import style from './Aside.module.css'
import Input from './Input/Input.jsx'
import InfoTemp from './InfoTemp/InfoTemp.jsx'
import OtherInfo from './OtherInfo/OtherInfo.jsx'

export default function Aside(props){
    return(
        <div className={style.aside}>
            <Input api = {props.API} handleLocation ={props.handleLocation} searchLocation = {props.searchLocation} location = {location}/>
            <InfoTemp temp = {props.temp} tempNight = {props.tempNight}/>
            <OtherInfo 
            windSpeed= {props.windSpeed}
            humidity = {props.humidity}
            pressure = {props.pressure}
            visibility = {props.visibility}
            />
        </div>
    )
} 



