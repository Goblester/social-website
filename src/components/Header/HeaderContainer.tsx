import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {RootState} from '../../redux/redux-store';
import {setLogOut, setUser, UserDataType} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component<OwnHeaderPropsType, never> {

    componentDidMount() {
        this.props.setUser();
    }

    render() {

        return <Header isAuthorized={this.props.isAuthorized}
                       login={this.props.userData?.login as string}
                       id={this.props.userData?.id as number}
                       logOut={this.props.setLogOut}
        />
    }

}

type MapStatePropsType = {
    userData: UserDataType | null,
    isAuthorized: boolean
}

type MapDispatchPropsType = {
    setUser: () => void,
    setLogOut: () => void
}

type OwnHeaderPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: RootState): MapStatePropsType => ({
    userData: state.auth.userData,
    isAuthorized: state.auth.isAuthorized
});


export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, {setUser, setLogOut})(HeaderContainer);