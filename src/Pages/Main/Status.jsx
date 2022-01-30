import React, {useState} from "react";

function Status({status, changeStatus, updateStatus}) {
    const [statusIn, changeStatusOn] = useState(true)

    const onChangeStatus = (event) => {
        let text = event.target.value
        changeStatus(text)
    }
    let changeStatusTrue = (status) => {
        changeStatusOn(true)
        updateStatus(status)

    }

    return (
        <div>
            {statusIn === true &&
                <div>
                    <span style={{marginRight: '5px', background: 'yellowgreen'}}>{status}</span>
                    <button onClick={() => changeStatusOn(false)}>Edit</button>
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
