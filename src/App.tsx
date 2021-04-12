import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {BrowserRouter, Route, RouteComponentProps, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import {compose} from '@reduxjs/toolkit';
import {connect, Provider} from 'react-redux';
import store, {RootState} from './redux/redux-store';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {LazyLoading} from './hoc/LazyLoading/LazyLoading';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component<AppPropsType, never> {
    constructor(props: AppPropsType) {
        super(props);
    }

    componentDidMount() {

        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Route path={'/profile/:userId?'}
                               render={() => LazyLoading(ProfileContainer)}/>
                    <Route path={'/dialogs'}
                           render={() => LazyLoading(DialogsContainer)}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: () => void
}


type OwnAppPropsType = MapDispatchPropsType & MapStatePropsType;

type AppPropsType = RouteComponentProps<void> & OwnAppPropsType

const mapStateToProps = (state: RootState) => ({
    initialized: state.app.initialized
})


const AppContainer = compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>(mapStateToProps, {initializeApp}),
    withRouter
)(App)


export const SamuraiJsApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}
