import React from "react";
import "./../Dialogs.module.css";
import s from "./../Dialogs.module.css";
import "./../../Navigation/Friends/Friend/Friend.module.css"
import f from"./../../Navigation/Friends/Friend/Friend.module.css";

type MessagePropsType = {
    message: string,
    fromYou: boolean,
    photo: string
}

function Message({message, fromYou, photo}: MessagePropsType) {


    let messagePosition = fromYou ? s.rightMessage : s.leftMessage;
    let imgPosition = fromYou ? s.yourImg : s.personImg;
    return (
        <div className={messagePosition}>
            <div className={`${imgPosition} ${f.circularLandscape} `}>
                <img src={photo} alt=""/>
            </div>
            <div className={s.message}>
                {message}
            </div>
        </div>
    );
}

export default Message;