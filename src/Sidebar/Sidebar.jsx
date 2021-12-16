import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <nav className={s.sidebar}>
            <NavLink to="/" >Profile</NavLink>
            <NavLink to="/message">Message</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </nav>
    );
}

export default Sidebar;
