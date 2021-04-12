import React from 'react';
import {
    follow,
    followInProgress,
    requestUsers,
    setCurrentPage,
    setUsers,
    toggleIsFletching,
    unFollow,
    UserType
} from '../../redux/users-reducer';
import {RootState} from '../../redux/redux-store';
import {connect} from 'react-redux';
import Users from './Users';
import {
    getCurrentPage,
    getFollowingIdInProgress,
    getFollowingToggleInProgress,
    getIsFetching,
    getPagesCount,
    getUsersSuper
} from '../../redux/selectors/users-selectors';

class UsersContainer extends React.Component<UsersContainerPropsType, never> {
    constructor(props: UsersContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, 10);
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page);
        this.props.requestUsers(page, 10);
    }


    render() {

        return (
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   totalPagesCount={this.props.totalPagesCount}
                   isFletching={this.props.isFletching}
                   followingToggleInProgress={this.props.followingToggleInProgress}
                   followingIdInProgress={this.props.followingIdInProgress}
                   onPageChanged={this.onPageChanged}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   followInProgress={this.props.followInProgress}/>
        )
    }
}

type MapStatePropsType = {
    users: Array<UserType>,
    totalPagesCount: number,
    currentPage: number,
    isFletching: boolean,
    followingToggleInProgress: boolean,
    followingIdInProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => void,
    toggleIsFletching: (isFletching: boolean) => void,
    followInProgress: (followingToggleInProgress: boolean, followingIdInProgress: number) => void,
    requestUsers: (currentPage: number, pageSize: number) => void
}

export type UsersContainerPropsType = MapDispatchPropsType & MapStatePropsType;


const mapStateToProps = (state: RootState): MapStatePropsType => {

    return {
        users: getUsersSuper(state),
        totalPagesCount: getPagesCount(state),
        currentPage: getCurrentPage(state),
        isFletching: getIsFetching(state),
        followingToggleInProgress: getFollowingToggleInProgress(state),
        followingIdInProgress: getFollowingIdInProgress(state)
    }
}


export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    toggleIsFletching,
    followInProgress,
    requestUsers
})(UsersContainer);