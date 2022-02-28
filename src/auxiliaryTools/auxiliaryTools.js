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

export const ReturnFieldForm = (classNameWrap, labelName, name, component, type, className, validate, rows, cols, props) => {

    return (
        <div className={classNameWrap}>
            <label htmlFor={name} style={{marginRight: "5px"}}>{labelName}</label>
            <Field name={name} component={component} type={type} className={className}
                   validate={validate} rows={rows} cols={cols} {...props}
            />
        </div>
    );
}
