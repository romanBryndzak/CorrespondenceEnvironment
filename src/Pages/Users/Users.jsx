import React from "react";
import User from "./User";
import Preloader from "../../auxiliaryTools/Preloader";

function Users(props) {
    return (
        <div>
            {props.usersP.isFetching ? <Preloader width={"500px"}/> :
                <User users={props.users} followStatus={props.usersP.followStatus}
                      disableFollowBut={props.disableFollowBut}
                      follow={props.follow} UnFollow={props.UnFollow} onSetCurrentPage={props.onSetCurrentPage}
                      usersP={props.usersP}/>
            }
        </div>
    )
}

export default Users