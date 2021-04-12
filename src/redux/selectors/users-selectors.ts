import {RootState} from '../redux-store';
import {createSelector} from '@reduxjs/toolkit';
import {UserType} from '../users-reducer';


export const getUsers = (state:RootState)=>{
    return state.usersPage.users
}

export const getUsersMega = (users:Array<UserType>)=>{
    return users.filter(u=>true)
}

export const getUsersSuper = createSelector(getUsers, (users)=>{
    return users.filter(u=>true)
})

export const getPagesCount = (state:RootState)=>{
    return state.usersPage.totalPagesCount
}

export const getCurrentPage = (state:RootState)=>{
    return state.usersPage.currentPage
}

export const getIsFetching = (state:RootState)=>{
    return state.usersPage.isFletching
}

export const getFollowingToggleInProgress = (state:RootState)=>{
    return state.usersPage.followingToggleInProgress
}

export const getFollowingIdInProgress = (state:RootState)=>{
    return state.usersPage.followingIdInProgress
}

