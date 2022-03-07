import React, {memo, useState} from "react";
import s from './Main.module.css';
import {ava} from "../../img/img";
import Status from "./Status";


const ProfileInfo = memo(({userId, infoUser, status, changeStatus, updateStatus, authMe, pathLocal}) => {
    const {small} = infoUser.photos;
    const {fullName, aboutMe, lookingForAJob, lookingForAJobDescription} = infoUser;

    const [changePhoto, setChangePhoto] = useState(false);

    const onChangePhoto = () => {
        setChangePhoto(true);
    };

    return (
        <div className={s.content}>
            <div>
                <div>
                    <img src={small !== null ? small : ava} alt="ava" onClick={onChangePhoto}/>
                </div>
                {pathLocal === `/profile/${userId}` && authMe ? <input type="file"/> : null}
                <Status status={status} userId={userId} authMe={authMe} pathLocal={pathLocal}
                        changeStatus={changeStatus} updateStatus={updateStatus}
                />
                <p>fullName: {fullName}</p>
                <p>About me: {aboutMe}</p>
                <p>Looking for a job: {lookingForAJob ? "yes" : "no"}</p>
                <p>Looking for a job description: {lookingForAJobDescription}</p>
            </div>
            <div>
                <p style={{fontWeight: "bold"}}>Contacts</p>
                <div className={s.contacts}>{Object.keys(infoUser.contacts).map((key) => {
                    return (<p key={key}>{key}: {infoUser.contacts[key]}</p>)
                })}
                </div>
            </div>
        </div>
    );
})

export default ProfileInfo;