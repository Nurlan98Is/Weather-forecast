import React from 'react'
import style from '../css/TempInfo.module.css'

export default function InfoTemp({ weather = {}, futureWeather = {} }) {
    // Безопасная деструктуризация с вложенными значениями по умолчанию
    const { temp: currentTemp = 0 } = weather;
    const { main: { temp: futureTemp = 0 } = {} } = futureWeather;

    // Функции для конвертации температуры
    const toCelsius = (k) => k === 0 ? 0 : Math.round(k - 273.15);
    const toFahrenheit = (k) => k === 0 ? 0 : Math.round(1.8 * (k - 273) + 32);

    return (
        <div className={style.conteiner_temp}>
            <p className={style.text}>Current Temperature:</p>
            <p className={style.celsius_current}>{toCelsius(currentTemp)}°C</p>
            <p className={style.pharyngitis_current}>{toFahrenheit(currentTemp)}°F</p>

            <p className={style.text}>Temperature after 12 hours:</p>
            <p className={style.celsius_12hours}>{toCelsius(futureTemp)}°C</p>
            <p className={style.pharyngitis_12hours}>{toFahrenheit(futureTemp)}°F</p>
        </div>
    );
}
