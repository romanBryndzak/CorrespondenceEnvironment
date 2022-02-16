import React from "react";
import s from "./Users.module.css";
import {ava} from "../../img/img";
import Paginator from "../../auxiliaryTools/paginator";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setDisableNavLinkSidebar} from "../../redux/MainPageReducer";
import {GetUsers} from "../../redux/selectors";


function User(props) {
    const users = useSelector(GetUsers)
    const dispatch = useDispatch();

    const {follow, UnFollow, onSetCurrentPage} = props;
    const {followStatus, activePage, countUsers, amountUsers} = props.usersP;
    // const users = props.usersP.member;
    let navigate = useNavigate();

    const redirectToProfile = (id) => {
        navigate(`/profile/${id}`);
        dispatch(setDisableNavLinkSidebar(true));
    };

    return (
        <div>
            <Paginator activePage={activePage} countItems={countUsers} portionSize={10}
                       amountUsers={amountUsers} onSetCurrentPage={onSetCurrentPage}
            />
            {users.map(u => <div key={u.id} className={s.wrapperUser}>
                <div className={s.follow}>
                    <img onClick={() => redirectToProfile(u.id)} src={u.photos.small ? u.photos.small : ava} alt=""/>
                    <div>
                        {u.followed ?
                            <button disabled={followStatus.some(id => id === u.id)}
                                    onClick={() => {
                                        follow(u.id)
                                    }}>follow</button>
                            : <button disabled={followStatus.some(id => id === u.id)}
                                      onClick={() => {
                                          UnFollow(u.id)
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