import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {RootState} from '../../redux/redux-store';
import {
    ProfileInfoType,
    ProfileType,
    requestProfile,
    requestStatus,
    setPhoto,
    setProfileInfo,
    setStatus
} from '../../redux/profile-reducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from '@reduxjs/toolkit';
import Preloader from '../common/Preloader/Preloader';
import {getProfile, getStatus} from '../../redux/selectors/profile-selectors';
import {getAuthId} from '../../redux/selectors/auth-selectors';
import {ProfileFormData} from './ProfileInfo/ProfileData/ProfileData';

;


class ProfileContainer extends React.Component<ProfileContainerPropsType, never> {

    constructor(props: ProfileContainerPropsType) {
        super(props);
    };

    refreshProfile() {
        let userId = Number(this.props.match.params.userId);
        if (!userId) {
            userId = this.props.userId as number;
            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.requestProfile(userId);
        // setTimeout(() => {
        this.props.requestStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    };

    componentDidUpdate(prevState: ProfileContainerPropsType) {
        if (this.props.match.params.userId !== prevState.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        if(!this.props.isAuth){
            return <Redirect to={'/login'}/>
        }

        if (!this.props.profile) {
            return (
                <Preloader/>
            );
        }
        return (
            <Profile profile={this.props.profile} status={this.props.status} setStatus={this.props.setStatus}
                     userId={this.props.userId as number} setPhoto={this.props.setPhoto} setProfileInfo={this.props.setProfileInfo}/>
        );
    };

}

type ProfilePathParamsType = {
    userId: string;
}

type MapStatePropsType = {
    profile: ProfileType | null,
    status: string,
    userId: number | undefined
    isAuth: boolean
}

type MapDispatchPropsType = {
    requestProfile: (userId: number) => void,
    setStatus: (status: string) => void,
    requestStatus: (userId: number) => void
    setPhoto: (photoFile: File) => void
    setProfileInfo: (profileInfo: ProfileInfoType) => void
};

type OwnProfileContainerPropsType = MapDispatchPropsType & MapStatePropsType;

type ProfileContainerPropsType = RouteComponentProps<ProfilePathParamsType> & OwnProfileContainerPropsType

const mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: getProfile(state),
    status: getStatus(state),
    userId: getAuthId(state),
    isAuth: state.auth.isAuthorized
});


const mapDispatchToProps: MapDispatchPropsType = {
    requestProfile,
    setStatus,
    requestStatus,
    setPhoto,
    setProfileInfo
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)

