import {RootState} from '../../redux/redux-store';
import {setAuthorization, setSubmitError} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import Login, {LoginDataType} from './Login';

type MapStatePropsType = {
    isAuth: boolean,
    submitError: string | undefined
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    setAuthorization: (loginData: LoginDataType) => void,
    setSubmitError: (submitError: string| undefined)=>void
}

export type LoginPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: RootState): MapStatePropsType => ({
    isAuth: state.auth.isAuthorized,
    submitError: state.auth.submitError,
    captchaUrl: state.auth.captchaUrl
})

const LoginContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>
(mapStateToProps, {setAuthorization, setSubmitError})(Login);

export default LoginContainer;