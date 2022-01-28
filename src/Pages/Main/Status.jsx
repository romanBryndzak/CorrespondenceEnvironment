import React, {useState} from "react";
import s from './Main.module.css'

function Status({status, changeStatus}) {
    const [statusIn, changeStatusOn] = useState(true)

    const onChangeStatus = (event) => {
      let text = event.target.value
        changeStatus(text)
    }

    return (
        <div>
            {statusIn === true &&
                <div>
                    <span>{status}</span>
                    <button onClick={()=>changeStatusOn(false)}>Edit</button>
                </div>}
            {statusIn === false &&
                <div>
                    <input type="text" onChange={onChangeStatus}/>
                    <button onClick={()=>changeStatusOn(true)}>Add</button>
                </div>}
        </div>
    );
}

export default Status;
