import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import {ava} from "../img/img";

function Sidebar() {
    return (
        <nav className={s.sidebar}>
            <NavLink to="/" >Profile</NavLink>
            <NavLink to="/messages">Messages</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <NavLink to="/" className={s.friend}>Friends</NavLink>
            <div className={s.friendsAva}>
                <img src={ava} alt="ava"/>
                <img src={ava} alt="ava"/>
                <img src={ava} alt="ava"/>
            </div>
        </nav>
    );
}

export default Sidebar;
