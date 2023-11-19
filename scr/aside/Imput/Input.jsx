import style from './Input.module.css'
import {BsSearch} from 'react-icons/bs'
import {CiTempHigh} from 'react-icons/ci'

export default function Input(props){
    
    
    return(
        <div className={style.enter}>
            <div className ={style.conteiner}>
                <div className= {style.temp}>
                <CiTempHigh className ={style.CiTempHigh}/>
                </div>
                <input  onChange={props.handleLocation} onKeyPress = {props.searchLocation} type="text" id={style.enter} placeholder='Select town...'/>
                <div className = {style.lope}>
                    <BsSearch className ={style.BsSearch}/>
                </div>  
               
            </div>
        </div>
    )
}