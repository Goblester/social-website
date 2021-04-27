import React, {ChangeEvent} from 'react';
import './ProfileInfo.module.css';
import s from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/userPhoto.png'
import ProfileStatus from './ProfileStatus';
import {ProfileInfoType, ProfileType} from '../../../redux/profile-reducer';
import {ProfileData} from './ProfileData/ProfileData';


type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    setStatus: (status: string) => void
    userId: number
    setPhoto: (photo: File) => void
    setProfileInfo: (profileInfo: ProfileInfoType) => void
}


function ProfileInfo({profile, setStatus, status, userId, ...restProps}: ProfileInfoPropsType) {

    const getPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            restProps.setPhoto(e.currentTarget.files[0]);
        }
    }
    const isMe = !userId || profile.userId === userId;
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large !== null ? profile.photos.large : userPhoto} alt=""/>
                    {isMe && <input type="file" onChange={getPhoto}/>}
                </div>

                <ProfileStatus setStatus={setStatus}
                               status={status}
                               userId={userId}
                               profileId={profile.userId}/>
                <ProfileData isMe={isMe} profile={profile} setProfileInfo={restProps.setProfileInfo}/>
            </div>

        </div>
    );
}

export default ProfileInfo;