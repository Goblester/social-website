import React, {useState} from 'react';
import {ContactsType, ProfileInfoType, ProfileType} from '../../../../redux/profile-reducer';
import {Button, Container, Grid, Paper} from '@material-ui/core';
import {Form} from 'react-final-form';
import {ProfileTextField} from './ProfileDataForm';
import {Checkboxes} from 'mui-rff';

type ProfileDataPropsType = {
    isMe: boolean
    profile: ProfileType
    setProfileInfo: (profileInfo: ProfileInfoType)=>void
}

type ContactPropsType = {
    prop: string
    value: string | null
}

export type ProfileFormData = {
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}

export function ProfileData({isMe, profile, ...restProps}: ProfileDataPropsType) {
    const [editMode, setEditMode] = useState<boolean>(false);
    const lookingForAJob = `job description: ${profile.lookingForAJob ? 'yes' : 'no'}`;
    const initialValues = {
        fullName: profile.fullName,
        lookingForAJob: profile.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        aboutMe: profile.aboutMe,
        contacts: {
            facebook: profile.contacts.facebook,
            website: profile.contacts.website,
            vk: profile.contacts.vk,
            twitter: profile.contacts.twitter,
            instagram: profile.contacts.instagram,
            youtube: profile.contacts.youtube,
            github: profile.contacts.github,
            mainLink: profile.contacts.mainLink
        }
    }

    const onSubmit = (values: ProfileInfoType) => {
        setEditMode(prev => !prev);
        restProps.setProfileInfo(values);
    }
    const onButtonClick = () => {
        setEditMode(prev => !prev);
    }
    return (
        <Container>
            <Paper style={{padding: '20px'}} elevation={3}>
                {isMe && !editMode &&
                <Button variant={'contained'} color={'primary'} onClick={onButtonClick}>Change</Button>}

                <Form onSubmit={onSubmit}
                      initialValues={initialValues}
                      render={({handleSubmit, submitting}) => {
                          return (
                              <form onSubmit={handleSubmit}>
                                  <Grid container
                                        direction="column"
                                        justify="flex-start"
                                        alignItems="flex-start"
                                        spacing={2}>
                                      <ProfileTextField editMode={editMode} name={'fullName'} value={profile.fullName}
                                                        label={'full name'} variant={'outlined'} size={'small'}/>
                                      <ProfileTextField editMode={editMode} name={'aboutMe'} value={profile.aboutMe}
                                                        label={'about me'} variant={'outlined'} size={'small'}/>
                                      <Grid item>
                                          {editMode ? <Checkboxes name={'lookingForAJob'} data={{
                                              label: 'Looking for a Job',
                                              value: profile.lookingForAJob
                                          }}/> : lookingForAJob}
                                      </Grid>
                                      <ProfileTextField editMode={editMode} name={'lookingForAJobDescription'}
                                                        value={profile.lookingForAJobDescription}
                                                        label={'job description'} variant={'outlined'} size={'small'}
                                                        multiline
                                                        rows={3}/>

                                      {Object.keys(profile.contacts).map(key => {
                                          const newKey = key as keyof ContactsType;

                                          return (
                                              <ProfileTextField editMode={editMode} name={`contacts.` + key} key={key} label={key}
                                                                value={profile.contacts[newKey]} variant={'outlined'}
                                                                size={'small'}/>
                                          );
                                      })}
                                      {editMode && <Grid item>
                                          <Button type={'submit'} onClick={handleSubmit}
                                                  disabled={submitting} variant={'contained'}
                                                  color={'primary'}>Save</Button>
                                      </Grid>}
                                  </Grid>
                              </form>
                          )
                      }}/>


            </Paper>
        </Container>
    )
}
