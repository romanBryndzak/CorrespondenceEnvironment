import React, {useState} from "react";
import FormProfileInfo from "./FormProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {GetUsersId, GetInfoUser, GetIsFetching} from "../../redux/selectors";
import s from "./Settings.module.css";
import {switchIsFetching} from "../../redux/usersPageReducer";

function Settings() {
    const infoUser = useSelector(GetInfoUser);
    const userId = useSelector(GetUsersId);
    const isFetching = useSelector(GetIsFetching);

    const dispatch = useDispatch();
    const [activeSetting, setActiveSetting] = useState('');

    const InfoUser = 'Change user information';
    const Change = 'Change';
    let ActiveSetting = "";

    const onClick = (e) => {
        setActiveSetting(e.target.innerText);
        ActiveSetting = e.target.innerText;
        dispatch(switchIsFetching(true));
    };

    return (
        <div>
            <h2 style={{textAlign: "center"}}>Settings</h2>
            <article className={s.content}>
                <section className={s.headlines}>
                    <p onClick={(e) => onClick(e)}
                       className={activeSetting === InfoUser ? s.activeSetting : s.headlinesText}
                    >Change user information</p>
                    <p onClick={(e) => onClick(e)}
                       className={activeSetting === Change ? s.activeSetting : s.headlinesText}
                    >Change</p>
                </section>
                <section>
                    {activeSetting === InfoUser && isFetching
                        ? <FormProfileInfo infoUser={infoUser} userId={userId} setActiveSetting={setActiveSetting}/>
                        : null
                    }
                </section>
            </article>
        </div>
    );
}

export default Settings;
