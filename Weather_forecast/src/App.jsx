import axios from "axios";
import "./App.main.css";
import LeftSide from "./Components/LeftSide.jsx";
import RightSide from "./Components/RightSide.jsx";
import { useState } from "react";

const API_KEY = "672f039e824de7e4b0034d932897cb0d";

export default function App() {
  const [data, setData] = useState([]);
   const [futureData, setFutureData] = useState([]);
  const [background, setBackground] = useState("");
  const [location, setLocation] = useState("");

  const fetchWeatherData = async () => {
    if (!location) {
      alert("Введите локацию");
      return;
    }
    const API_KEY = "672f039e824de7e4b0034d932897cb0d";

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

    const API_FUTURE = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`

    try {
      //receive current weather
      const response = await fetch(API);
      response.json().then((res) => setData(res));
      // receive future weather
      const response_future = await fetch(API_FUTURE);
      response_future.json().then((res) => setFutureData(res));

    } catch (error) {
      console.error("Ошибка получения данных:", error);
      alert("Не удалось получить данные. Проверьте название города.");
    }
  };
  console.log("arr", data);
  console.log('future',futureData)
  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const getBackgroundImage = (weather) => {
    switch (weather) {
      case "Clouds":
        return "url(Clouds.jpg)";
      case "Clear":
        return "url(Sunny.jpg)";
      case "Rain":
        return "url(Rain.jpg)";
      case "Snow":
        return "url(Snowfall.jpg)";
      default:
        return "url(Ton.jpg)";
    }
  };

  return (
    <div>
      <div
        className="app"
        style={{
          backgroundImage: background
            ? getBackgroundImage(background)
            : "url(Ton.jpg)",
        }}
      >
        <LeftSide
          data={data}
          fetchWeatherData={fetchWeatherData}
          handleInputChange={handleInputChange}
        />
        <RightSide data={data} futureData={futureData} />
      </div>
    </div>
  );
}
