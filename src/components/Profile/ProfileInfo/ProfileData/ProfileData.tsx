import React from 'react';
import {ContactsType, ProfileType} from '../../../../redux/profile-reducer';
import {Grid, Paper} from '@material-ui/core';

type ProfileDataPropsType = {
    isMe: boolean
    profile: ProfileType
}

type ContactPropsType = {
    prop: string
    value: string | null
}

export function ProfileData({isMe, profile, ...restProps}: ProfileDataPropsType) {
    return (
        <Paper style={{padding: '20px'}}>
            <Grid container
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
            spacing={2}>

                <Grid item xs={6}>

                    Full Name: {profile.fullName}

                </Grid>


                <Grid item>
                    About Me: {profile.aboutMe}
                </Grid>

                <Grid item>
                    Looking for a Job: {profile.lookingForAJob ? 'yes' : 'no'}
                </Grid>

                <Grid item>
                    job description: {profile.lookingForAJobDescription}
                </Grid>


                {Object.keys(profile.contacts).map(key => {
                    const newKey = key as keyof ContactsType;
                    debugger;
                    return (
                        <Grid item key={key}>
                            <Contact prop={key} value={profile.contacts[newKey]}/>
                        </Grid>
                    );
                })}
            </Grid>
        </Paper>
    )
}


function Contact({prop, value}: ContactPropsType) {
    debugger;
    return (
        <span>{prop}: {value ? value : '----'}</span>
    )
}