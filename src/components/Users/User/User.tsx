import s from '../Users.module.css';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../../assets/images/userPhoto.png';
import React from 'react';

type UserPropsType = {
    userId: number,
    smallPhoto: string,
    followed: boolean,
    name: string,
    status: string,
    followingIdInProgress: Array<number>,
    unFollow: (userId: number) => void,
    follow: (userId: number) => void,
}


export function User({userId, followingIdInProgress,followed, name, smallPhoto, status, ...props}:UserPropsType){
    return(
        <div className={s.usersContainer}>
            <div className={s.photo}>
                <div>
                    <NavLink to={`/profile/${userId}`}>
                        <img src={smallPhoto !== null ? smallPhoto : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {followed ? <button disabled={followingIdInProgress.some(id => id === userId)} onClick={() => {
                            props.unFollow(userId);
                        }
                        }>Unfollow</button> :
                        <button disabled={followingIdInProgress.some(id => id === userId)} onClick={() => {
                            props.follow(userId);
                        }
                        }>Follow</button>}
                </div>
            </div>

            <div className={s.info}>
                <div className={s.name}>{name}</div>
                <div
                    className={s.status}>{status !== null ? status : `text example for ${name}`}</div>
                <div className={s.location}>
                    <div>{userId}</div>
                </div>
            </div>
        </div>
    )
}