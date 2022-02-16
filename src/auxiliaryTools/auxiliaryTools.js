import s from './auxiliaryTools.module.css'
import {Field} from "redux-form";
import React from "react";

export const increaseId = (length) => {
    return length++
}

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props}/>
            <div className={s.error}>
                {touched && (error && <span>{error}</span>)
                }</div>
        </div>
    )
}

export const Input = ({input, meta: {touched, error}, ...props}) => {
    return (
        <div>
            <input {...input} {...props}/>
            <div className={s.error}>
                {touched && (error && <span>{error}</span>)
                }</div>

        </div>
    )
}

export const ReturnFieldForm = (name, component, type, className, validate) => {
    return (
        <div>
            <label htmlFor={name}>email</label>
            <Field name={name} component={component} type={type} className={className}
                   validate={validate}
            />
        </div>
    );
}
