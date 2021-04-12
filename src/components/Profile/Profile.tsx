import React, {ComponentType} from 'react';
import './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';


export type ProfilePropsType = {
    profile: ProfileType
    status: string
    setStatus: (status: string) => void
    userId: number
    setPhoto: (photo: File) => void
}

const Profile = React.memo<ComponentType<ProfilePropsType>>((props: ProfilePropsType) => {
    return (
        <section>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </section>
    );
})

export default Profile;