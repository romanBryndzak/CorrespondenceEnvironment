import React from "react";
import {Field, reduxForm} from "redux-form";
import s from './login.module.css'
import {Input} from "../../auxiliaryTools/auxiliaryTools";
import {maxLength, required} from "../../auxiliaryTools/fieldValidator";

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
        <button type='submit'>Submit</button>
    </form>)
}

const ReduxForm = reduxForm({form: 'login'})(LoginForm)

function Login() {
    const maxLengthPass = maxLength(18)
    let onSubmit = (formData) => {
    }
    return (<div className={s.wrapper}>
        <ReduxForm onSubmit={onSubmit} maxLengthPass={maxLengthPass}/>
    </div>)
}

export default Login