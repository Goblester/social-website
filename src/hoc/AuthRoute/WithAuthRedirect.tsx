import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";

type AuthRoutePropsType = {
    isAuth: boolean,
    redirect: () => void
}


function WithAuthRedirect<T>(ComposedComponent: ComponentType<T>) {

    function Authenticate(props: MapStatePropsType) {
        const {isAuth, ...restProps} = props;
        if (!props.isAuth)
            return <Redirect to={"/login"}/>
        return <ComposedComponent {...restProps as T}/>
    }

    type MapStatePropsType = {
        isAuth: boolean
    }

    const mapStateToProps = (state: RootState): MapStatePropsType => ({
        isAuth: state.auth.isAuthorized
    })

    return connect(mapStateToProps)(Authenticate)
}

export default WithAuthRedirect;