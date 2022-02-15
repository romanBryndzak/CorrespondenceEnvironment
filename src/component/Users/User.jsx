import React from "react";
import s from "./Users.module.css";
import {ava} from "../../img/img";
import Paginator from "../../auxiliaryTools/paginator";
import {useNavigate} from "react-router-dom";


function User(props) {
    let navigate = useNavigate();

    const redirectToProfile = (id) => {
       navigate(`/profile/${id}`);
        props.setDisableNavLinkSidebar(true);
    };

    return (
        <div className={s.wrapperUsers}>
            <Paginator activePage={props.usersP.activePage} countItems={props.usersP.countUsers}
                       amountUsers={props.usersP.amountUsers} onSetCurrentPage={props.onSetCurrentPage}
                       portionSize={10}
            />
            {props.users.map(u => <div key={u.id} className={s.wrapperUser}>
                <div className={s.follow}>
                    <img onClick={() => redirectToProfile(u.id)} src={u.photos.small ? u.photos.small : ava} alt=""/>
                    <div>
                        {u.followed ?
                            <button disabled={props.followStatus.some(id => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}>follow</button>
                            : <button disabled={props.followStatus.some(id => id === u.id)}
                                      onClick={() => {
                                          props.UnFollow(u.id)
                                      }}>unfollow</button>}
                    </div>
                </div>
                <div className={s.info}>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div/>
            </div>)}
        </div>
    );
}

export default User;