import React from "react";
import {Field, reduxForm} from "redux-form";
import s from './login.module.css';
import {Input} from "../../auxiliaryTools/auxiliaryTools";
import {maxLength, required} from "../../auxiliaryTools/fieldValidator";
import {connect} from "react-redux";
import {login} from "../../redux/AuthorizationReducer";
import {useNavigate} from "react-router-dom";

let LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit} className={s.form}>
        <h3>Login</h3>
        <div>
            <label htmlFor='email'>email</label>
            <Field name='email' component={Input} type='email' className={s.text}
                   validate={[required]}
            />
        </div>
        <div>
            <label htmlFor='password'>password</label>
            <Field name='password' component={Input} type='password' className={s.text}
                   validate={[required, props.maxLengthPass]}
            />
        </div>
        <div>
            <label htmlFor='remember'>remember</label>
            <Field name='remember' component={Input} type='checkbox'/>
        </div>
        <div className={props.error ? s.error : ''}>{props.error}</div>
        <button type='submit'>Submit
        </button>
    </form>);
};

const ReduxForm = reduxForm({form: 'login'})(LoginForm);

function Login(props) {

    let navigate = useNavigate();
    redirectToProfile(props.id)

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
            <ReduxForm onSubmit={onSubmit} maxLengthPass={maxLengthPass}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        id: state.authorization.userId,
        authMe: state.authorization.authMe,
    };
};

export default connect(mapStateToProps, {login})(Login);