import React from 'react'
import style from '../css/Input.module.css'
import {BsSearch} from 'react-icons/bs'
import {CiTempHigh} from 'react-icons/ci'

export default function Input({handleLocation, searchLocation, location}){

    const handleClick = () => {
        if (location.trim()) { // Проверяем, что есть текст для поиска
            // Создаем искусственное событие для searchLocation
            const mockEvent = { key: 'Enter' };
            searchLocation(mockEvent);
        }
    };
    return(
        <div className={style.enter}>
            <div className ={style.conteiner}>
                <div className= {style.temp}>
                <CiTempHigh className ={style.CiTempHigh}/>
                </div>
                <input value = {location}  onChange = {handleLocation} onKeyDown = {searchLocation} type="text" id={style.enter} placeholder='Select town...'/>
                <button onClick={handleClick} className = {style.btnSearch}>
                    <BsSearch className ={style.BsSearch}/>
                </button>
            </div>
        </div>
    )
}
