import React from "react";
import s from "./Settings.module.css";
import {reduxForm} from "redux-form";
import {Input, ReturnFieldForm, Textarea} from "../../auxiliaryTools/auxiliaryTools";
import {useDispatch} from "react-redux";
import {changeProfileInfo} from "../../redux/MainPageReducer";


let ProfileForm = ({infoUser, error, ...props}) => {

    const wrapper = s.wrapperCustomField;

    return (
        <form onSubmit={props.handleSubmit} style={{textAlign: "start"}}>
            <div>
                <div className={error ? s.error : null}>{error}</div>
                <p>{ReturnFieldForm(wrapper, "Full name :", "fullName", Input, "text",
                    null, null,)}</p>
                <p>{ReturnFieldForm(wrapper, "About me :", "aboutMe", Textarea,
                    "text", null, null, "2", "35")}</p>
                <p>{ReturnFieldForm(wrapper, "Looking for a job :", "lookingForAJob", Input,
                    "checkbox", null, null,)}</p>
                <p>{ReturnFieldForm(wrapper, "Looking for a job description :", "lookingForAJobDescription",
                    Textarea, "text", null, null, "2", "35")}</p>
            </div>
            <div>
                <p style={{fontWeight: "bold"}}>Contacts</p>
                <div className={s.contacts}>{Object.keys(infoUser.contacts).map((key) => {
                        return (
                            <p key={key}>{ReturnFieldForm(wrapper, `${key} :`, `contacts.${key}`, Input, "text", null, null)}</p>
                        );
                    }
                )}
                </div>
            </div>
            <button className={s.add}>Send changes</button>
        </form>
    );
}

const ReduxInfo = reduxForm({form: "profileInfo"})(ProfileForm);

function FormProfileInfo({infoUser, userId}) {
    const iV = {...infoUser, ...infoUser.contacts};

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(changeProfileInfo(formData, userId));
    };

    return (
        <ReduxInfo initialValues={iV} onSubmit={onSubmit} infoUser={infoUser} />
    );

}

export default FormProfileInfo;