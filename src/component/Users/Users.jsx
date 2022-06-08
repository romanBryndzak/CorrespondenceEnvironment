import React from "react";
import User from "./User";
import Preloader from "../../auxiliaryTools/Preloader";
import Paginator from "../../auxiliaryTools/paginator";

function Users({usersP, follow, UnFollow, onSetCurrentPage, disableFollowBut}) {

    const {activePage, countUsers, amountUsers} = usersP;

    return (
        <div>
            <Paginator activePage={activePage} countItems={countUsers} portionSize={10}
                       amountUsers={amountUsers} onSetCurrentPage={onSetCurrentPage}
            />
            {usersP.isFetching ? <Preloader width={"500px"}/> :
                <User usersP={usersP} disableFollowBut={disableFollowBut}
                      follow={follow} UnFollow={UnFollow} onSetCurrentPage={onSetCurrentPage}
                />
            }
        </div>
    );
}

export default Users;