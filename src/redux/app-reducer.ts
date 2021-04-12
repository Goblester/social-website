import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {RootState} from './redux-store';
import {setUser} from './auth-reducer';

type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

function appReducer(state: InitialStateType = initialState, action: AppActionTypes): InitialStateType {
    switch (action.type) {
        case 'social-network/app/SET-INITIALIZED':
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }

}

export type AppActionTypes = SetInitializedActionType;

const SET_INITIALIZED = 'social-network/app/SET-INITIALIZED';


export type SetInitializedActionType = {
    type: typeof SET_INITIALIZED
};


export const initializeSuccess = (): SetInitializedActionType => {
    return {
        type: SET_INITIALIZED
    };
}

type ThunkResult<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;


export function initializeApp(): ThunkResult {
    return async function (dispatch) {
        const promise = dispatch(setUser());
        await Promise.all([promise])
        dispatch(initializeSuccess());
    }
}


export default appReducer;