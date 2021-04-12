import {PhotosType} from './users-reducer';
import {ThunkAction} from 'redux-thunk';
import {profileAPI} from '../API/api';
import {Dispatch} from 'react';

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}

export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}

type InitialStateType = {
    posts: Array<PostType>,
    profile: ProfileType | null,
    status: string
};

const initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, How are you', likesCount: 13},
        {id: 2, message: 'My first post', likesCount: 20},
        {id: 3, message: 'My second post', likesCount: 15},
        {id: 4, message: 'bam bam bam', likesCount: 9999}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state: InitialStateType = initialState, action: ProfilePageActionTypes): InitialStateType => {
    switch (action.type) {
        case 'social-network/profile/ADD-POST': {
            let newPost = {
                id: 5,
                message: action.post,
                likesCount: 32
            }

            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case 'social-network/profile/SET-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'social-network/profile/SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'social-network/profile/DELETE-POST':
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.id)]
            }

        default:
            return state;

    }
};

export type ProfilePageActionTypes =
    | AddPostActionType
    | setProfileActionType
    | setStatusActionType
    | deletePostActionType;

const ADD_POST = 'social-network/profile/ADD-POST';
const SET_PROFILE = 'social-network/profile/SET-PROFILE';
const SET_STATUS = 'social-network/profile/SET-STATUS';
const DELETE_POST = 'social-network/profile/DELETE-POST';


export type AddPostActionType = {
    type: typeof ADD_POST,
    post: string
}

export type setProfileActionType = {
    type: typeof SET_PROFILE,
    profile: ProfileType
}

export type setStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}

export type deletePostActionType = {
    type: typeof DELETE_POST,
    id: number
}

export const addPost = (post: string): AddPostActionType => ({type: ADD_POST, post})

export const setProfile = (profile: ProfileType): setProfileActionType => ({type: SET_PROFILE, profile: profile});

export const setStatusAccept = (status: string): setStatusActionType => ({type: SET_STATUS, status});

export const deletePost = (id: number): deletePostActionType => ({type: DELETE_POST, id})


export function requestProfile(userId: number): ThunkAction<void, InitialStateType, undefined, ProfilePageActionTypes> {
    return function (dispatch) {
        profileAPI.getProfileInfo(userId)
            .then((data) => {
                dispatch(setProfile(data));
            });
    }
}

export function setStatus(status: string): ThunkAction<void, InitialStateType, undefined, ProfilePageActionTypes> {
    return async function (dispatch) {
        const data = await profileAPI.setStatus(status);

        if (data.resultCode === 0) {
            dispatch(setStatusAccept(status));
        }

    }
}

export function requestStatus(userId: number): ThunkAction<void, InitialStateType, undefined, ProfilePageActionTypes> {
    return async function (dispatch: Dispatch<ProfilePageActionTypes>) {
        const data = await profileAPI.getStatus(userId);
        dispatch(setStatusAccept(data));
    }
}


export default profileReducer;