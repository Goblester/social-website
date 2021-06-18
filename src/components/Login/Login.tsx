import React from 'react';
import LoginForm from './LoginForm';
import {LoginPropsType} from './LoginContainer';
import {Redirect} from 'react-router-dom';

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: true
    captcha?: string
}

function Login({isAuth, setAuthorization, submitError, setSubmitError, captchaUrl}: LoginPropsType) {
    debugger;
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm captchaUrl={captchaUrl}
                       setAuthorization={setAuthorization}
                       submitError={submitError}
                       setSubmitError={setSubmitError}/>
        </div>
    )
}


export default Login;