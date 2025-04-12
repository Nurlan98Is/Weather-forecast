import City from "./City.jsx";
import style from "../Styles/RightSide.module.css";
import WeatherFutureDay1 from "./Weatherfuture.jsx";
// import { WeatherFutureDay2 } from "./Weatherfuture.jsx";
// import { WeatherFutureDay3 } from "./Weatherfuture.jsx";
// import { WeatherFutureDay4 } from "./Weatherfuture.jsx";
// import { WeatherFutureDay5 } from "./Weatherfuture.jsx";

export default function RightSide({data, futureData}) {
  return (
    <div className={style.RightSide}>
      <div className={style.city}>
        <City
          city={data.name}
          description={data?.weather?.[0]?.description}
        />
      </div>
      <div className={style.future_weather}>
        <WeatherFutureDay1
          futureData={futureData}
        />

      </div>
    </div>
  );
}
