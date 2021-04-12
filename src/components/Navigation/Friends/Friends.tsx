import React from "react";
import "./Friends.module.css";
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";

type FriendsPropsType = {
    friends: Array<{
        id: number,
        name: string,
        photo: string
    }>
};

function Friends(props:FriendsPropsType) {
    let friendsElements = props.friends.map((el,t) => {
        return <Friend  key={el.id} name={el.name} photo={el.photo}/>;
    });
    return (
        <div className={s.friends}>
            <span>Friends</span>
            {friendsElements}
        </div>
    );
}

export default Friends;