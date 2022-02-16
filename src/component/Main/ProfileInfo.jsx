import React from "react";
import s from './Main.module.css';
import {ava} from "../../img/img";
import Status from "./Status";

function ProfileInfo({infoUser, status, changeStatus, updateStatus}) {
    const {small} = infoUser.photos;
    const {fullName, aboutMe, lookingForAJob, lookingForAJobDescription} = infoUser;
    const {facebook, website, vk, twitter, instagram, youtube, github, mainLink} = infoUser.contacts;

    return (
        <div className={s.content}>
            <div>
                <div>
                    <img src={small !== null ? small : ava} alt="ava"/>
                </div>
                <Status status={status} changeStatus={changeStatus} updateStatus={updateStatus}/>
                <p>fullName: {fullName}</p>
                <p>About me: {aboutMe}</p>
                <p>Looking for a job: {lookingForAJob}</p>
                <p>Looking for a job description:{lookingForAJobDescription}</p>
            </div>
            <div>
                <p style={{fontWeight: "bold"}}>Contacts</p>
                <div className={s.contacts}>
                    <p>facebook: {facebook}</p>
                    <p>website: {website}</p>
                    <p>vk: {vk}</p>
                    <p>twitter: {twitter}</p>
                    <p>instagram: {instagram}</p>
                    <p>youtube: {youtube}</p>
                    <p>github: {github}</p>
                    <p>mainLink: {mainLink}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
