import React from "react";
import {reduxForm} from "redux-form";
import s from './login.module.css';
import {Input, ReturnFieldForm} from "../../auxiliaryTools/auxiliaryTools";
import {maxLength, required} from "../../auxiliaryTools/fieldValidator";
import {connect} from "react-redux";
import {login} from "../../redux/AuthorizationReducer";
import {useNavigate} from "react-router-dom";
import {setDisableNavLinkSidebar} from "../../redux/MainPageReducer";

let LoginForm = ({handleSubmit, error, captchaUrl, maxLengthPass, setDisableNavLinkSidebar}) => {

    function onClick() {
        setDisableNavLinkSidebar(true);
    }

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <h3>Login</h3>
            {ReturnFieldForm(null, 'email', 'email', Input, 'email', s.text, [required])}
            {ReturnFieldForm(null, 'password', 'password', Input, 'password', s.text, [required, maxLengthPass])}
            {ReturnFieldForm(null, 'remember', 'remember', Input, 'checkbox', null, null)}
            {captchaUrl && <img src={captchaUrl} alt=''/>}
            {captchaUrl && ReturnFieldForm(null, 'context captcha', 'captcha', Input, 'text', null, null)}
            <div className={error ? s.error : ''}>{error}</div>
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

    const maxLengthPass = maxLength(18);
    let onSubmit = (formData) => {
        let {email, password, remember, captcha} = formData
        props.login(email, password, remember, captcha);
        console.log(email, password, remember, captcha)
    };
    return (
        <div className={s.wrapper}>
            <ReduxForm onSubmit={onSubmit} maxLengthPass={maxLengthPass} captchaUrl={props.captchaUrl}
                       setDisableNavLinkSidebar={props.setDisableNavLinkSidebar}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        id: state.authorization.userId,
        authMe: state.authorization.authMe,
        captchaUrl: state.authorization.captchaUrl,
    };
};

export default connect(mapStateToProps, {setDisableNavLinkSidebar, login})(Login);