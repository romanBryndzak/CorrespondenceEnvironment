import React from "react";
import s from "./Users.module.css"
import {ava} from "../../img/img";
import * as axios from "axios";

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
    const addSetEffect =
        (props) => {

            if (props.users.length === 0) {
                axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                    debugger
                    console.log(response.data.items)
                    const users = response.data.items
                    props.setUsers(users)
                })

            }
        }

    return (
        <div>
            <button onClick={addSetEffect}>add users</button>
            {props.users.map(u => <div key={u.id} className={s.wrapper}>
                <div className={s.follow}>
                    <div><img src={u.photos.small ? u.photos.small : ava} alt=""/></div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.following(u.id)
                            }}>follow</button>
                            : <button onClick={() => {
                                props.unFollow(u.id)
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
    )
}

export default Users


// props.setUsers(
//     [
//         {
//             id: "1",
//             photos: {small: null, large: null},
//             uniqueUrlName: "",
//             followed: false,
//             name: "Roman",
//             status: "I am find jod!",
//             location: {city: "L`viv", country: "Ukraine"}
//         },
//         {
//             id: "2",
//             photos: {small: null, large: null},
//             uniqueUrlName: "",
//             followed: false,
//             name: "Maryna",
//             status: "I am fine!",
//             location: {city: "L`viv", country: "Ukraine"}
//         }
//     ]
// )
