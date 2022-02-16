import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import {ava} from "../../img/img";
import {connect} from "react-redux";
import {setDisableNavLinkSidebar} from "../../redux/MainPageReducer";


function Sidebar({disableNavLinkSidebar, setDisableNavLinkSidebar}) {

    function disable(e) {
        setDisableNavLinkSidebar(e);
    }

    return (
        <nav className={s.sidebar}>
            <NavLink to="/profile" className={disableNavLinkSidebar ? s.disabledLink : s.active}
                     onClick={() => disable(true)}
            >
                Profile
            </NavLink>
            <NavLink to="/messages" onClick={() => disable(false)}>
                Messages
            </NavLink>
            <NavLink to="/music" onClick={() => disable(false)}>Music</NavLink>
            <NavLink to="/news" onClick={() => disable(false)}>News</NavLink>
            <NavLink to="/settings" onClick={() => disable(false)}>Settings</NavLink>
            <NavLink to="/" onClick={() => disable(false)}>Users</NavLink>
            <NavLink to="/" className={s.friend} onClick={() => disable(false)}>Friends</NavLink>
            <div className={s.friendsAva}>
                <img src={ava} alt="ava"/>
                <img src={ava} alt="ava"/>
                <img src={ava} alt="ava"/>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        disableNavLinkSidebar: state.profilePage.disableNavLinkSidebar
    };
};

export default connect(mapStateToProps, {setDisableNavLinkSidebar})(Sidebar);
