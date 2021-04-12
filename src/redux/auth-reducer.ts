import {ThunkAction} from 'redux-thunk';
import {authAPI} from '../API/api';
import {LoginDataType} from '../components/Login/Login';
import {Dispatch} from 'react';
import {Action} from 'redux';
import {RootState} from './redux-store';

type InitialStateType = {
    userData: UserDataType | null
    isAuthorized: boolean,
    submitError: string | undefined
}


export type UserDataType = {
    id: number,
    login: string,
    email: string
}

const initialState: InitialStateType = {
    userData: null,
    isAuthorized: false,
    submitError: undefined
};

function authReducer(state: InitialStateType = initialState, action: AuthActionTypes): InitialStateType {
    switch (action.type) {
        case 'social-network/auth/SET-USER-DATA':
            return {
                ...state,
                userData: action.userData,
                isAuthorized: action.isAuth,
                submitError: undefined
            };
        case 'social-network/auth/SET-SUBMIT-ERROR':
            return {
                ...state,
                submitError: action.submitError
            }
        default:
            return state;
    }

}

export type AuthActionTypes = SetUserDataActionType | SetSubmitErrorActionType;

const SET_USER_DATA = 'social-network/auth/SET-USER-DATA';
const SET_SUBMIT_ERROR = 'social-network/auth/SET-SUBMIT-ERROR'

export type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    userData: UserDataType | null,
    isAuth: boolean
};

export type SetSubmitErrorActionType = {
    type: typeof SET_SUBMIT_ERROR,
    submitError: string | undefined
}

export const setUserData = (data: UserDataType | null, isAuth: boolean): SetUserDataActionType => {
    return {
        type: SET_USER_DATA,
        userData: data,
        isAuth: isAuth
    };
}

export const setSubmitError = (submitError: string | undefined): SetSubmitErrorActionType => {
    return {
        type: SET_SUBMIT_ERROR,
        submitError
    }
}


export type ThunkResult<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;


export function setUser(): ThunkResult {
    return async function (dispatch) {
        const data = await authAPI.getAuthInfo();
        const isAuth = data.resultCode === 0;
        dispatch(setUserData(data.data, isAuth));

    }
}


export function setAuthorization(loginData: LoginDataType): ThunkResult {
    return async function (dispatch: Dispatch<AuthActionTypes>) {
        const data = await authAPI.setLogin(loginData);
        if (data.resultCode === 0)
            setUser();
        else
            dispatch(setSubmitError(data.messages[0]));

    }
}

export function setLogOut(): ThunkResult {
    return async function (dispatch: Dispatch<AuthActionTypes>) {
        const data = await authAPI.logout()
        if (data.resultCode === 0)
            dispatch(setUserData(null, false));
    }
}


export default authReducer;