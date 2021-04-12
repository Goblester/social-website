import React, {ComponentType} from 'react';
import './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';


export type ProfilePropsType = {
    profile: ProfileType
    status: string,
    setStatus: (status: string) => void,
    userId: number
}

const Profile = React.memo<ComponentType<ProfilePropsType>>((props: ProfilePropsType) => {
    console.log('RENDER');
    console.log(props);
    return (
        <section>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </section>
    );
})

export default Profile;