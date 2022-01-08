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


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            const users = response.data.items
            this.props.setUsers(users)
        })
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => <div key={u.id} className={s.wrapper}>
                    <div className={s.follow}>
                        <div><img src={u.photos.small ? u.photos.small : ava} alt=""/></div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.following(u.id)
                                }}>follow</button>
                                : <button onClick={() => {
                                    this.props.unFollow(u.id)
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
//         }
//     ]
// )
