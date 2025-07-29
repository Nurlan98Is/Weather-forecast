import React from 'react'
import City from './City.jsx';
import style from '../css/Face.module.css';
import WeatherFutureCard from "./Weatherfuture.jsx";

export default function FrontSide({ weather = {}, futureWeather = {}}) {
    const { name = '',  } = weather;
    const { list = [] } = futureWeather;

    // Отображаем только существующие элементы
    const validItems = [6, 14, 22, 30, 38]
        .map(index => list[index])
        .filter(item => item !== undefined);
    return (
        <div className={style.front_side}>
            <div className={style.city}>
                <City city={name} extraDescription={weather} />
            </div>
            <div className={style.future_weather}>
                {validItems.length > 0 ? (
                    validItems.map((item, index) => (
                        <WeatherFutureCard
                            key={index}
                            weatherFutureArray={item}
                        />
                    ))
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}
