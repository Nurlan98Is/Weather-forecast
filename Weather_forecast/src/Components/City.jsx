import style from "../Styles/City.module.css";
export default function City(props) {
  return (
    <div className={style.city_conteiner}>
      <p className={style.city}>{props.city ?  props.city : ''}</p>
      <p className={style.description}>Weather: {props.description}</p>
    </div>
  );
}
