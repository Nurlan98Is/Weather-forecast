import { useState } from "react";
import style from "../Styles/Input.module.css";
import { BsSearch } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";

export default function Input({ fetchWeatherData, handleInputChange }) {
  return (
    <div className={style.enter}>
      <div className={style.conteiner}>
        <div className={style.temp}>
          <CiTempHigh className={style.CiTempHigh} />
        </div>
        <input
          onChange={handleInputChange}
          //value={location}
          type="text"
          id={style.enter}
          placeholder="Select town..."
          autoComplete="off"
        />
        <div className={style.lope}>
          <button
            className={style.btn_search}
            onClick={() => fetchWeatherData()}
          >
            <BsSearch className={style.BsSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}
