import React from 'react';
import {addPost, PostType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootState} from '../../../redux/redux-store';


type MapStatePropsType = {
    posts: Array<PostType>
}

type MapDispatchPropsType = {
    addPost: (post:string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
};

const mapDispatchToProps: MapDispatchPropsType = {
    addPost
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;