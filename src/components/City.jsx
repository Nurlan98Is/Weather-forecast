import React from 'react'
import style from '../css/City.module.css'

export default function City({ extraDescription = {}, city }) {
    
    const { weather = [] } = extraDescription || {};

    const changeTextColor = (weatherDesc) => {
        if (!weatherDesc) return { color: 'black' };

        switch (weatherDesc.toLowerCase()) {
            case 'light rain':
                return { color: 'white' };
            default:
                return { color: 'black' };
        }
    }

    const styleDescription = changeTextColor(weather[0]?.description);

    return (
        <div className={style.city_container}>
            <p className={style.city} style={styleDescription}>{city === '' ? "City..." : city}</p>
            <p
                className={style.description}
                style={styleDescription}
            >
                Description: {weather[0]?.description || "No description available"}
            </p>
        </div>
    )
}
