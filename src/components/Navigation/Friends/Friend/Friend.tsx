import React from "react";
import "./../../Navigation.module.css";
import s from "./../../Navigation.module.css";
import "./Friend.module.css";
import f from "./Friend.module.css";

type FriendPropsType = {
    key: number,
    name: string,
    photo: string
}

function Friend(props: FriendPropsType) {
    return (
        <div className={`${s.item} ${f.friend}`}>
            <a href="">
                <div className={f.circularLandscape}>
                    <img src={props.photo} alt=""/>
                </div>
                <div>
                    {props.name}
                </div>
            </a>
        </div>
    );
}

export default Friend;