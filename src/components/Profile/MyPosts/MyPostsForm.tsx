import React from 'react';
import {Field, Form } from 'react-final-form';
import {combineValidators, isRequired, maxLength} from '../../../utils/validation/validators';

type postDataType = {
    post: string
}

type MyPostsFormPropsType = {
    addPost : (post: string)=>void
}

function MyPostsForm({addPost}:MyPostsFormPropsType){

    const onPostSubmit = (postData: postDataType)=>{
        addPost(postData.post);
    }

    return(
        <Form onSubmit={onPostSubmit}
        render={({handleSubmit, form})=>(
            <form onSubmit={handleSubmit}>
                <Field name={'post'}
                       component={'input'}
                       type={'textarea'}
                       placeholder = {'enter post'}
                       validate={combineValidators(isRequired, maxLength(10))}
                />
                       <button type={'submit'}
                       onMouseLeave={()=>{form.reset()}}>post</button>
            </form>
        )}/>
    )
}

export default MyPostsForm;