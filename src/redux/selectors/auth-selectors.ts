import {RootState} from '../redux-store';

export const getAuthId = (state:RootState)=>{
    return state.auth.userData?.id
}