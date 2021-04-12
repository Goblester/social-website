import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {RootState} from '../../redux/redux-store';
import {requestStatus, ProfileType, requestProfile, setStatus} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from '@reduxjs/toolkit';
import Preloader from '../common/Preloader/Preloader';
import {getProfile, getStatus} from '../../redux/selectors/profile-selectors';
import {getAuthId} from '../../redux/selectors/auth-selectors';

;


class ProfileContainer extends React.Component<ProfileContainerPropsType, never> {

    constructor(props: ProfileContainerPropsType) {
        super(props);
    };

    componentDidMount() {
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
        //    }, 2000)

    };

    render() {
        if (!this.props.profile) {
            return (
                <Preloader/>
            );
        }
        return (
            <Profile profile={this.props.profile} status={this.props.status} setStatus={this.props.setStatus}
                     userId={this.props.userId as number}/>
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
}

type MapDispatchPropsType = {
    requestProfile: (userId: number) => void,
    setStatus: (status: string) => void,
    requestStatus: (userId: number) => void
};

type OwnProfileContainerPropsType = MapDispatchPropsType & MapStatePropsType;

type ProfileContainerPropsType = RouteComponentProps<ProfilePathParamsType> & OwnProfileContainerPropsType

const mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: getProfile(state),
    status: getStatus(state),
    userId: getAuthId(state)
});


const mapDispatchToProps: MapDispatchPropsType = {
    requestProfile,
    setStatus,
    requestStatus,
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)

