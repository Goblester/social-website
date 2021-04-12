import {RootState} from '../redux-store';

export const getProfile = (state:RootState)=>{
    return state.profilePage.profile
}

export const getStatus = (state:RootState)=>{
    return state.profilePage.status
}