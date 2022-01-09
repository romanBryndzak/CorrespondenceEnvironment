import React from "react";
import s from './Main.module.css'
import {ava} from "../../img/img";

function ProfileInfo({infoUser}) {

    return (
        <div className={s.content}>
            <div>
                <div className={s.ava}>
                    <img src={infoUser.photos.small !== null ? infoUser.photos.small : ava} alt="ava"/>
                </div>
                <p>fullName: {infoUser.fullName}.</p>
                <p>About me: {infoUser.aboutMe}.</p>
                <p>Looking for a job: {infoUser.lookingForAJob}.</p>
                <p>Looking for a job description:{infoUser.lookingForAJobDescription}.</p>
            </div>
            <div>
                <p style={{fontWeight: "bold"}}>Contacts</p>
                <div className={s.contacts}>
                    <p>facebook: {infoUser.contacts.facebook}</p>
                    <p>website: {infoUser.contacts.website}</p>
                    <p>vk: {infoUser.contacts.vk}</p>
                    <p>twitter: {infoUser.contacts.twitter}</p>
                    <p>instagram: {infoUser.contacts.instagram}</p>
                    <p>youtube: {infoUser.contacts.youtube}</p>
                    <p>github: {infoUser.contacts.github}</p>
                    <p>mainLink: {infoUser.contacts.mainLink}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
