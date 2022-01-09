import React from "react";
import s from "./Users.module.css"
import Paginator from "../../auxiliaryTools/paginator";
import User from "./User";

function Users(props) {
    return (
        <div className={s.wrapperUsers}>
            <Paginator activePage={props.usersP.activePage} countItems={props.usersP.countUsers}
                       amountUsers={props.usersP.amountUsers} onSetCurrentPage={props.onSetCurrentPage}
                       portionSize={10}
            />
            <User users={props.users} following={props.following} unFollow={props.unFollow}/>
        </div>
    )
}

export default Users