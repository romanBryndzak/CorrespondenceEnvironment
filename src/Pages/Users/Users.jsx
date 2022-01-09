import React from "react";
import s from "./Users.module.css"
import Paginator from "../../auxiliaryTools/paginator";
import User from "./User";
import Preloader from "../../auxiliaryTools/Preloader";

function Users(props) {
    return (
        <div className={s.wrapperUsers}>
            {props.usersP.isFetching ? <Preloader width={"500px"}/> : null}
            <Paginator activePage={props.usersP.activePage} countItems={props.usersP.countUsers}
                       amountUsers={props.usersP.amountUsers} onSetCurrentPage={props.onSetCurrentPage}
                       portionSize={10}
            />
            <User users={props.users} following={props.following} unFollow={props.unFollow}/>
        </div>
    )
}

export default Users