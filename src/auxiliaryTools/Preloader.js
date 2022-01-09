import React from "react";
import s from "./auxiliaryTools.module.css"
import preloader from "./../img/preloader.svg"


const Preloader = (props) => {
    return (
        <div className={s.preloader} style={{width: props.width}}>
            <img src={preloader} alt={'preloader'}/>
        </div>
    )
};

export default Preloader;