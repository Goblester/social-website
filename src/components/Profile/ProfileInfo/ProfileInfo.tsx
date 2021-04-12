import React from 'react';
import './ProfileInfo.module.css';
import s from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/userPhoto.png'
import ProfileStatus from './ProfileStatus';
import {ProfilePropsType} from '../Profile';


function ProfileInfo({profile, setStatus, status, userId}: ProfilePropsType) {

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large !== null ? profile.photos.large : userPhoto} alt=""/>
                <div>
                    <ProfileStatus setStatus={setStatus}
                                   status={status}
                                   userId={userId}
                                   profileId={profile.userId}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;