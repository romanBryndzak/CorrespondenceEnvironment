import React from "react";
import s from "myfile/Users.module.css"
import {ava} from "../../img/img";

// function User(props) {
//     return (
//         <div className={s.wrapper}>
//             <div className={s.follow}>
//                 <div><img src={ava} alt=""/></div>
//                 <div>{props.followed ? <button onClick={() => {
//                     props.following(props.id)
//                 }}>follow</button> : <button onClick={() => {
//                     props.unFollow(props.id)
//                 }}>unFollow</button>}</div>
//             </div>
//             <div className={s.info}>
//                 <div>{props.fullName}</div>
//                 <div>{props.status}</div>
//                 <div>{props.country}</div>
//                 <div>{props.city}</div>
//             </div>
//         </div>
//     )
// }

// let user = props.memberApp.map(u => {
//     return (
//         <User key={u.id} followed={u.followed} fullName={u.fullName} status={u.status}
//               unFollow={props.unFollow} following={props.following}/>
//     )
// })

function Users(props) {

    return (
        <div>
            {props.memberApp.map(u => <div key={u.id} className={s.wrapper}>
                <div className={s.follow}>
                    <div><img src={ava} alt=""/></div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {props.following(u.id)}}>follow</button>
                            : <button onClick={() => {props.unFollow(u.id)}}>unFollow</button>}
                    </div>
                </div>
                <div className={s.info}>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
                <div/>
            </div>)}
        </div>
    )
}

export default Users

