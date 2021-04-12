import React from 'react';
import s from "./Preloader.module.css";
import preloader from "../../../assets/images/preloader.svg";

function Preloader(){
    return(
        <div className={s.preloader}><img src={preloader} alt=""/></div>
    )
}

export default Preloader;