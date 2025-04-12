import style from "../Styles/LeftSide.module.css";
import Input from "./Input.jsx";
import InfoTemp from "./InfoTemp.jsx";
import GeneralInfo from "./GeneralInfo.jsx";

export default function LeftSide({
  fetchWeatherData,
  handleInputChange,
  ...props
}) {
  return (
    <div className={style.leftSide_container}>
      <Input
        api={props.API}
        fetchWeatherData={fetchWeatherData}
        handleInputChange={handleInputChange}
      />
      <InfoTemp temp={props?.data?.main?.temp} tempNight={props.tempNight} />
      <GeneralInfo
        windSpeed={props?.data?.wind?.speed}
        humidity={props?.data?.main?.humidity}
        pressure={props?.data?.main?.pressure}
        visibility={props?.data?.visibility}
      />
    </div>
  );
}
