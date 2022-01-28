import React from "react";
import {Navigate} from "react-router-dom";

const WithAuthRedirect = (Component) => {
    let AuthMeRedirect = (props) => {
        if (!props.authMe) return <Navigate to="/login"/>
        return <Component {...props}/>
    }
    return AuthMeRedirect
}
export default WithAuthRedirect