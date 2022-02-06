import React from "react";
import {Field, reduxForm} from "redux-form";
import s from './login.module.css'

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <h3>Login</h3>
            <div>
                <label htmlFor='email'>email</label>
                <Field name='email' component='input' type='email' className={s.text}/>
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <Field name='password' component='input' type='password' className={s.text}/>
            </div>
            <div>
                <label htmlFor='remember'>remember</label>
                <Field name='remember' component='input' type='checkbox'/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

const ReduxForm = reduxForm({form: 'login'})(LoginForm)

function Login() {
    let onSubmit = (formData) => {
    }
  return <ReduxForm onSubmit={onSubmit}/>
}

export default Login