import React, {useState} from "react";
import s from "./Main.module.css"

function Status({status, changeStatus, updateStatus, pathLocal, userId, authMe}) {
    const [statusIn, changeStatusOn] = useState(true);

    const onChangeStatus = (event) => {
        let text = event.target.value;
        changeStatus(text);
    };
    let changeStatusTrue = (status) => {
        changeStatusOn(true);
        updateStatus(status);
    };

    return (
        <div className={s.wrapperStatus}>
            {statusIn === true &&
                <div>
                    <span className={s.status}>{status}</span>
                    {pathLocal === `/profile/${userId}` && authMe
                        ? <button onClick={() => changeStatusOn(false)}>Edit</button>
                        : null
                    }
                </div>}
            {statusIn === false &&
                <div>
                    <input type="text" onChange={onChangeStatus}/>
                     <button onClick={() => changeStatusTrue(status)}>Add</button>
                </div>}
        </div>
    );
}

export default Status;
