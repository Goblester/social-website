import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navigationReducer from "./navigation-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";
import appReducer from './app-reducer';
import {compose} from '@reduxjs/toolkit';


let rootReducer  = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    navigationPage: navigationReducer,
    usersPage: userReducer,
    auth: authReducer,
    app: appReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>


export default store;

// @ts-ignore
window.store = store