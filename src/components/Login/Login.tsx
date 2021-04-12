import React from 'react';
import LoginForm from './LoginForm';
import {LoginPropsType} from './LoginContainer';
import {Redirect} from 'react-router-dom';

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: true
}

function Login({isAuth, setAuthorization, submitError, setSubmitError}: LoginPropsType) {

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm setAuthorization={setAuthorization}
                       submitError={submitError}
                       setSubmitError={setSubmitError}/>
        </div>
    )
}


export default Login;