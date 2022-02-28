import React from "react";
import s from "./Main.module.css";
import {ava} from "../../img/img";
import Status from "./Status";
import {reduxForm} from "redux-form";
import {Input, ReturnFieldForm, Textarea} from "../../auxiliaryTools/auxiliaryTools";
import {useDispatch} from "react-redux";
import {changeProfileInfo} from "../../redux/MainPageReducer";


let ProfileForm = ({infoUser, status, changeStatus, updateStatus, setEdit, ...props}) => {

    const {small} = infoUser.photos;
    const wrapper = s.wrapperCustomField;
    let onClick = () => {
        setEdit(false);
    };

    return (
        <form onSubmit={props.handleSubmit} className={s.content}>
            <div>
                <div>
                    <img src={small !== null ? small : ava} alt="ava"/>
                </div>
                <Status status={status} changeStatus={changeStatus} updateStatus={updateStatus}/>
                <button type="submit" onClick={() => {
                    setTimeout(onClick, 1000);
                }} className={s.buttonChangeInfo}>save
                </button>
                <p>{ReturnFieldForm(wrapper, "Full name :", "fullName", Input, "text",
                    null, null,)}</p>
                <p>{ReturnFieldForm(wrapper, "About me :", "aboutMe", Textarea,
                    "text", null, null, "2", "90")}</p>
                <p>{ReturnFieldForm(wrapper, "Looking for a job :", "lookingForAJob", Input,
                    "checkbox", null, null,)}</p>
                <p>{ReturnFieldForm(wrapper, "Looking for a job description :", "lookingForAJobDescription",
                    Textarea, "text", null, null, "2", "90")}</p>
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
        </form>
    );
}


const ReduxInfo = reduxForm({form: "profileInfo"})(ProfileForm);

function FormProfileForm({infoUser, status, changeStatus, updateStatus, setEdit, userId}) {
    const iV = {...infoUser, ...infoUser.contacts};

    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch(changeProfileInfo(formData, userId));
    };

    return (
        <ReduxInfo initialValues={iV} onSubmit={onSubmit} infoUser={infoUser} status={status} setEdit={setEdit}
                   changeStatus={changeStatus} updateStatus={updateStatus}
        />
    );

}

export default FormProfileForm;
