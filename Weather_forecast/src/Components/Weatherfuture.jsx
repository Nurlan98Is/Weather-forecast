import style from "../Styles/WeatherTime.module.css";
import ClearSky from "a:/projects/App weather forecast/Weather_forecast/src/assets/sun.png";
import Cloud from "a:/projects/App weather forecast/Weather_forecast/src/assets/cloud.png";
import Rain from "a:/projects/App weather forecast/Weather_forecast/src/assets/rain.png";
import Snowy from "a:/projects/App weather forecast/Weather_forecast/src/assets/snow.png";
const getIconWeather = (icon) => {
  switch (icon) {
    case "Clear":
      return ClearSky;
    case "Clouds":
      return Cloud;
    case "Rain":
      return Rain;
    case "Snow":
      return Snowy;
  }
};
export default function WeatherFutureDay1({futureData}) {
  return futureData?.iconImage1 === "" ? null : (
    <div className={style.conteiner_card}>
      <div className={style.time_f}>
        <p>{futureData?.dateDay1}</p>
      </div>
      <div className={style.icon}>
        <p>
          <img
            src={getIconWeather(futureData.iconImage1)}
            alt=""
            style={{ width: 140, height: 140 }}
          />
        </p>
      </div>
      <div className={style.temp_f}>
        <p>
          {futureData?.list[0]?.main?.temp ? Math.floor(futureData.list[0]?.main?.temp - 273) : 0} C
        </p>
      </div>
    </div>
  );
}

// export const WeatherFutureDay2 = (props) => {
//   return props.iconImage2 === "" ? null : (
//     <div className={style.conteiner_card}>
//       <div className={style.time_f}>
//         <p>{props.dateDay2}</p>
//       </div>
//       <div className={style.icon}>
//         <p>
//           <img
//             src={getIconWeather(props.iconImage2)}
//             alt=""
//             style={{ width: 140, height: 140 }}
//           />
//         </p>
//       </div>
//       <div className={style.temp_f}>
//         <p>
//           {props.futureTempDay2 === 0
//             ? 0
//             : Math.floor(props.futureTempDay2 - 273)}
//           C
//         </p>
//       </div>
//     </div>
//   );
// };
// export const WeatherFutureDay3 = (props) => {
//   return props.iconImage3 === "" ? null : (
//     <div className={style.conteiner_card}>
//       <div className={style.time_f}>
//         <p>{props.dateDay3}</p>
//       </div>
//       <div className={style.icon}>
//         <p>
//           <img
//             src={getIconWeather(props.iconImage3)}
//             alt=""
//             style={{ width: 140, height: 140 }}
//           />
//         </p>
//       </div>
//       <div className={style.temp_f}>
//         <p>
//           {props.futureTempDay3 === 0
//             ? 0
//             : Math.floor(props.futureTempDay3 - 273)}
//           C
//         </p>
//       </div>
//     </div>
//   );
// };
// export const WeatherFutureDay4 = (props) => {
//   return props.iconImage4 === "" ? null : (
//     <div className={style.conteiner_card}>
//       <div className={style.time_f}>
//         <p>{props.dateDay4}</p>
//       </div>
//       <div className={style.icon}>
//         <p>
//           <img
//             src={getIconWeather(props.iconImage4)}
//             alt=""
//             style={{ width: 140, height: 140 }}
//           />
//         </p>
//       </div>
//       <div className={style.temp_f}>
//         <p>
//           {props.futureTempDay4 === 0
//             ? 0
//             : Math.floor(props.futureTempDay4 - 273)}
//           C
//         </p>
//       </div>
//     </div>
//   );
// };
// export const WeatherFutureDay5 = (props) => {
//   return props.iconImage5 === "" ? null : (
//     <div className={style.conteiner_card}>
//       <div className={style.time_f}>
//         <p>{props.dateDay5}</p>
//       </div>
//       <div className={style.icon}>
//         <p>
//           <img
//             src={getIconWeather(props.iconImage5)}
//             alt=""
//             style={{ width: 140, height: 140 }}
//           />
//         </p>
//       </div>
//       <div className={style.temp_f}>
//         <p>
//           {props.futureTempDay5 === 0
//             ? 0
//             : Math.floor(props.futureTempDay5 - 273)}
//           C
//         </p>
//       </div>
//     </div>
//   );
// };
