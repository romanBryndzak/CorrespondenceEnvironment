import s from './Sidebar.module.css'

function Sidebar() {
    return (
            <sidebar className={s.sidebar}>
                <a href="/profile">Profile</a>
                <a href="/message">Message</a>
                <a href="/music">Music</a>
                <a href="/news">News</a>
                <a href="/settings">Settings</a>
            </sidebar>

    );
}

export default Sidebar;
