import React from "react";
import User from "./User";
import Preloader from "../../auxiliaryTools/Preloader";

function Users({usersP, follow, UnFollow, onSetCurrentPage, disableFollowBut}) {
    return (
        <div>
            {usersP.isFetching ? <Preloader width={"500px"}/> :
                <User usersP={usersP} disableFollowBut={disableFollowBut}
                      follow={follow} UnFollow={UnFollow} onSetCurrentPage={onSetCurrentPage}
                />
            }
        </div>
    );
}

export default Users;