import React from "react";
import {NavLink} from "react-router-dom";
import "./../Dialogs.module.css";
import s from "./../Dialogs.module.css";
import "./../../Navigation/Friends/Friend/Friend.module.css"
import f from "./../../Navigation/Friends/Friend/Friend.module.css";


type DialogItemPropsType = {
    name: string,
    key: string,
    photo: string
}

function DialogItem({name, key, photo}: DialogItemPropsType) {
    const path = "/dialogs/" + key;

    return (
        <div className={s.dialog}>
            <div className={f.circularLandscape}>
                <img src={photo} alt=""/>
            </div>
            <NavLink to={path}>
                <div className={s.dialogName}>
                    {name}
                </div>
            </NavLink>
        </div>
    );
}

export default DialogItem;