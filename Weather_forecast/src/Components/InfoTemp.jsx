import style from "../Styles/TempInfo.module.css";

export default function InfoTemp(props) {
  return (
    <div className={style.conteiner_temp}>
      <p className={style.text}>Current Temepature:</p>
        <div className={style.currentTemp_container}>
            <span className={style.celsius_current}>
                {props.temp == undefined ? 0 : Math.round(props.temp - 273)}C
            </span>
            <span className={style.pharyngitis_current}>
                {props.temp == undefined
                    ? 0
                    : Math.round(1.8 * (props.temp - 273) + 32)}
                F
            </span>
        </div>

      <p className={style.text}>Temperature after 12 hours:</p>
        <div className={style.futureTemp_container}>
            <span className={style.celsius_12hours}>
                {props.tempNight == undefined ? 0 : Math.round(props.tempNight - 273)}C
            </span>
            <span className={style.pharyngitis_12hours}>
                {props.tempNight == undefined
                    ? 0
                    : Math.round(1.8 * (props.tempNight - 273) + 32)}
                F
            </span>
        </div>

    </div>
  );
}
