import React, {memo, useState} from "react";
import s from './Main.module.css';
import {ava} from "../../img/img";
import Status from "./Status";
import FormProfileInfo from "./FormProfileInfo";


const ProfileInfo = memo(({userId, infoUser, status, changeStatus, updateStatus, authMe, pathLocal}) => {
    const {small} = infoUser.photos;
    const {fullName, aboutMe, lookingForAJob, lookingForAJobDescription} = infoUser;

    const [edit, setEdit] = useState(false);
    const [changePhoto, setChangePhoto] = useState(false);

    const onChangePhoto = () => {
        setChangePhoto(true);
    };

    return (
        <div>
            {edit
                ?
                <FormProfileInfo infoUser={infoUser} status={status} setEdit={setEdit} userId={userId}
                                 changeStatus={changeStatus} updateStatus={updateStatus}
                />
                :
                <div className={s.content}>
                    <div>
                        <div>
                            <img src={small !== null ? small : ava} alt="ava" onClick={onChangePhoto}/>
                        </div>
                        {pathLocal === `/profile/${userId}` && authMe ? <input type="file"/> : null}
                        <Status status={status} userId={userId} authMe={authMe} pathLocal={pathLocal}
                                changeStatus={changeStatus} updateStatus={updateStatus}
                        />
                        {pathLocal === `/profile/${userId}` && authMe
                            ?
                            <button onClick={() => setEdit(true)} className={s.buttonChangeInfo}>edit</button>
                            :
                            null
                        }
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
            }
        </div>
    );
})

export default ProfileInfo;