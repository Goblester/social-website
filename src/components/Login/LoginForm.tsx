import React from 'react';
import {Field, Form} from 'react-final-form';
import {LoginDataType} from './Login';
import {Input} from '../common/FormsControls/FormsControls';
import {combineValidators, isRequired, maxLength} from '../../utils/validation/validators';
import {FORM_ERROR} from 'final-form';

type LoginFormPropsType = {
    captchaUrl: string | null
    setAuthorization: (loginData: LoginDataType) => void,
    submitError: string | undefined,
    setSubmitError: (submitError: string | undefined) => void
}

const LoginForm = ({setAuthorization,captchaUrl, ...props}: LoginFormPropsType) => {
    const onSubmit = (formData: LoginDataType) => {
        setAuthorization({
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe,
            captcha: formData.captcha
        });

    }


    return (
        <Form onSubmit={onSubmit}
              validate={(value) => {
                  return {[FORM_ERROR]: props.submitError}
              }}
              render={({handleSubmit, error, form, submitting}) => {

                  return (
                      <form onSubmit={handleSubmit}>
                          <div>
                              <Field name={'email'} component={Input} type={'text'} placeholder={'email'}
                                     validate={combineValidators(isRequired, maxLength(20))}/>
                          </div>
                          <div>
                              <Field name={'password'} component={Input} type={'password'} placeholder={'password'}
                                     validate={combineValidators(isRequired, maxLength(20))}/>
                          </div>
                          <div>
                              <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> remember me
                          </div>
                          {captchaUrl&&<div><img src={captchaUrl}/></div>}
                          {captchaUrl&&<Field name={'captcha'} component={'input'} type={'text'}/>}
                          <div className="error">{error}</div>
                          <button type={'submit'} onClick={() => {
                              props.setSubmitError(undefined);
                          }} disabled={submitting}>login
                          </button>
                      </form>
                  )
              }
              }/>
    )
}

export default LoginForm;