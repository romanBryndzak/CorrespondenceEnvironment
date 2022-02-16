import React from "react";
import {reduxForm} from "redux-form";
import s from './login.module.css';
import {Input, ReturnFieldForm} from "../../auxiliaryTools/auxiliaryTools";
import {maxLength, required} from "../../auxiliaryTools/fieldValidator";
import {connect} from "react-redux";
import {login} from "../../redux/AuthorizationReducer";
import {useNavigate} from "react-router-dom";
import {setDisableNavLinkSidebar} from "../../redux/MainPageReducer";

let LoginForm = (props) => {
    function onClick() {
        props.setDisableNavLinkSidebar(true);
    }

    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <h3>Login</h3>
            {ReturnFieldForm('email', Input, 'email', s.text, [required])}
            {ReturnFieldForm('password', Input, 'password', s.text, [required, props.maxLengthPass])}
            {ReturnFieldForm('remember', Input, 'checkbox', null, null)}
            <div className={props.error ? s.error : ''}>{props.error}</div>
            <button type='submit' onClick={onClick}>Submit</button>
        </form>);
};

const ReduxForm = reduxForm({form: 'login'})(LoginForm);

function Login(props) {

    let navigate = useNavigate();
    redirectToProfile(props.id);

    function redirectToProfile(id) {
        if (props.authMe) {
            navigate(`/profile/${id}`);
        }
    }

    const maxLengthPass = maxLength(18)
    let onSubmit = (formData) => {
        let {email, password, remember} = formData
        props.login(email, password, remember);
    }
    return (
        <div className={s.wrapper}>
            <ReduxForm onSubmit={onSubmit} maxLengthPass={maxLengthPass}
                       setDisableNavLinkSidebar={props.setDisableNavLinkSidebar}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        id: state.authorization.userId,
        authMe: state.authorization.authMe,
    };
};

export default connect(mapStateToProps, {setDisableNavLinkSidebar, login})(Login);