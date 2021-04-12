import {Dispatch} from 'react';
import {ThunkAction} from 'redux-thunk';
import {usersAPI} from '../API/api';
import {updateObjectsInArray} from '../utils/object-helpers';

export type PhotosType = {
    small: string,
    large: string
}

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: PhotosType,
    status: string,
    followed: boolean
}

const initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    totalPagesCount: 0,
    isFletching: false,
    followingToggleInProgress: false,
    followingIdInProgress: [] as Array<number>
}

type InitialStateType = typeof initialState;


function userReducer(state: InitialStateType = initialState, action: UsersActionTypes): InitialStateType {
    switch (action.type) {
        case 'social-network/users/FOLLOW':
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'social-network/users/UNFOLLOW':
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'social-network/users/SET-USERS':
            return {
                ...state,
                users: action.users
            }
        case 'social-network/users/SET-PAGES-COUNT':
            return {
                ...state,
                totalPagesCount: action.totalPagesCount
            }
        case 'social-network/users/SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'social-network/users/TOGGLE-IS-FLETCHING':
            return {
                ...state,
                isFletching: action.isFletching
            }
        case 'social-network/users/FOLLOW-IN-PROGRESS':
            return {
                ...state,
                followingToggleInProgress: action.followInProgress,
                followingIdInProgress: action.followInProgress ? [...state.followingIdInProgress, action.id]
                    : state.followingIdInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

export type UsersActionTypes =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetTotalUserCountActionType
    | SetCurrentPageActionType
    | ToggleIsFletchingActionType
    | FollowInProgressActionType;

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET-USERS';
const SET_PAGES_COUNT = 'social-network/users/SET-PAGES-COUNT';
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE';
const TOGGLE_IS_FLETCHING = 'social-network/users/TOGGLE-IS-FLETCHING';
const FOLLOW_IN_PROGRESS = 'social-network/users/FOLLOW-IN-PROGRESS';

export type FollowActionType = {
    type: typeof FOLLOW,
    userId: number
}

export type UnFollowActionType = {
    type: typeof UNFOLLOW,
    userId: number
}

export type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}

export type SetTotalUserCountActionType = {
    type: typeof SET_PAGES_COUNT,
    totalPagesCount: number
}

export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}

export type ToggleIsFletchingActionType = {
    type: typeof TOGGLE_IS_FLETCHING,
    isFletching: boolean
}

export type FollowInProgressActionType = {
    type: typeof FOLLOW_IN_PROGRESS,
    followInProgress: boolean,
    id: number
}

export const followAccept = (userId: number): FollowActionType => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export function unFollowAccept(userId: number): UnFollowActionType {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export function setUsers(users: Array<UserType>): SetUsersActionType {
    return {
        type: SET_USERS,
        users: users
    }
}

export function setPagesCount(totalPagesCount: number): SetTotalUserCountActionType {
    return {
        type: SET_PAGES_COUNT,
        totalPagesCount
    }
}

export function setCurrentPage(currentPage: number): SetCurrentPageActionType {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export function toggleIsFletching(isFletching: boolean): ToggleIsFletchingActionType {
    return {
        type: TOGGLE_IS_FLETCHING,
        isFletching: isFletching
    }
}

export function followInProgress(toggleFollowingInProgress: boolean, id: number): FollowInProgressActionType {
    return {
        type: FOLLOW_IN_PROGRESS,
        followInProgress: toggleFollowingInProgress,
        id: id
    }
}

type ThunkResult = ThunkAction<void, InitialStateType, undefined, UsersActionTypes>

export const requestUsers = (currentPage: number, pageSize: number): ThunkResult => {
    return async (dispatch: Dispatch<UsersActionTypes>) => {
        dispatch(toggleIsFletching(true));
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFletching(false));
        dispatch(setUsers(data.items));
        dispatch(setCurrentPage(currentPage));
        let totalUsersCount: number = data.totalCount;
        dispatch(setPagesCount(Math.ceil(totalUsersCount / pageSize)));
    }
}

const followUnfollowFlow = async (userId: number, typeOfAction: 'followUser' | 'unFollowUser', dispatch: Dispatch<UsersActionTypes>, actionCreator: (userId: number) => UsersActionTypes) => {
    dispatch(followInProgress(true, userId));
    const data = await usersAPI[typeOfAction](userId);
    dispatch(followInProgress(false, userId));
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
}

export const follow = (userId: number): ThunkResult => {
    return (dispatch) => {
        followUnfollowFlow(userId, 'followUser', dispatch, followAccept);
    }
}

export const unFollow = (userId: number): ThunkResult => {
    return (dispatch) => {
        followUnfollowFlow(userId, 'unFollowUser', dispatch, unFollowAccept);
    }
}


export default userReducer;