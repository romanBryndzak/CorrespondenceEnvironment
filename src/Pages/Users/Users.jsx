import React from "react";
import s from "./Users.module.css"
import {ava} from "../../img/img";
import * as axios from "axios";
import Paginator from "../../auxiliaryTools/paginator";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersP.activePage}&count${this.props.usersP.amountUsers}`)
            .then(response => {
                const users = response.data.items
                const amount = response.data.totalCount

                this.props.setUsers(users)
                this.props.totalCountUsers(amount)
            })
    }

    onsetCurrentPage = (numberPage) => {
        this.props.setCurrentPage(numberPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count${this.props.usersP.amountUsers}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={s.wrapperUsers}>
                <Paginator activePage={this.props.usersP.activePage} countItems={this.props.usersP.countUsers}
                           amountUsers={this.props.usersP.amountUsers} onsetCurrentPage={this.onsetCurrentPage}
                           portionSize={10}
                />
                {this.props.users.map(u => <div key={u.id} className={s.wrapperUser}>
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
