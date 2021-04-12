import React from 'react';
import './Users.module.css';
import s from './Users.module.css'
import {UserType} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import {User} from './User/User';
import {Paginator} from '../common/Paginator/Paginator';

type UsersPropsType = {
    users: Array<UserType>,
    totalPagesCount: number,
    currentPage: number,
    isFletching: boolean,
    followingToggleInProgress: boolean,
    followingIdInProgress: Array<number>,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    onPageChanged: (pageNumber: number) => void,
    followInProgress: (followingToggleInProgress: boolean, followingIdInProgress: number) => void
}

function Users({
                   totalPagesCount,
                   currentPage,
                   isFletching,
                   followingToggleInProgress,
                   followingIdInProgress,
                   users,
                   ...props
               }: UsersPropsType) {


    let usersComponent = users.map(u => {
        return (
            <User userId={u.id}
                  smallPhoto={u.photos.small}
                  followed={u.followed}
                  name={u.name}
                  status={u.status}
                  followingIdInProgress={followingIdInProgress}
                  unFollow={props.unFollow}
                  follow={props.follow}/>
        )
    });

    return (
        <div className={s.usersWrapper}>
            <h2 className={s.usersHeader}>Users</h2>
            {isFletching ? <Preloader/> : ''}
            <Paginator portionSize={10} currentItem={currentPage} itemCount={totalPagesCount} onPageChanged={props.onPageChanged}/>
            {usersComponent}
        </div>
    )
}

export default Users;