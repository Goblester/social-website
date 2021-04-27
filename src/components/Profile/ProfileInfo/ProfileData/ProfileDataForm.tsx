import React from 'react'
import {Grid} from '@material-ui/core';
import {TextField, TextFieldProps} from 'mui-rff';

type ProfileDataFormPropsType = TextFieldProps & {
    editMode?: boolean
}

export function ProfileTextField({
                                     editMode,
                                     value,
                                     label,
                                     ...restProps
                                 }: ProfileDataFormPropsType) {
    const str = `${label}: ${value ? value : 'no info'}`;
    return (
        <Grid item>
            {editMode ?
                <TextField label={label} {...restProps}/> :
                str
            }
        </Grid>
    )
}

