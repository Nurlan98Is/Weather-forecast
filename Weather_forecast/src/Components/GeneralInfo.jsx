import style from "../Styles/GeneralInfo.module.css";
import Barometr from "a:/projects/App weather forecast/Weather_forecast/src/assets/barometr.png";
import Wind from "a:/projects/App weather forecast/Weather_forecast/src/assets/wind.png";
import Visibility from "a:/projects/App weather forecast/Weather_forecast/src/assets/visibility.png";
import Humidity from "a:/projects/App weather forecast/Weather_forecast/src/assets/humidity.png";

export default function GeneralInfo(props) {
  return (
    <div className={style.generalInfo_conteiner}>

      <p className={style.wind}>
        <img src={Wind} alt="" />
        Wind: {props.windSpeed ?  props.windSpeed : 0} m/s SW
      </p>

      <p className={style.humidity}>
        <img src={Humidity} alt="Humidity" />
        Humidity: {props.humidity ? props.humidity : 0} %
      </p>

      <p className={style.pressure}>
        <img src={Barometr} alt="Pressure" />
        Pressure: {props.pressure ? props.pressure : 0} hPA
      </p>

      <p className={style.visibility}>
        <img src={Visibility} alt="Visibility" />
        Visibility: {props.visibility ? props.visibility : 0} Meters
      </p>

    </div>
  );
}
