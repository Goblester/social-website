import React, {ComponentType} from 'react';
import './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileInfoType, ProfileType} from '../../redux/profile-reducer';
import {ProfileFormData} from './ProfileInfo/ProfileData/ProfileData';


export type ProfilePropsType = {
    profile: ProfileType
    status: string
    setStatus: (status: string) => void
    userId: number
    setPhoto: (photo: File) => void
    setProfileInfo: (profileInfo: ProfileInfoType)=>void
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