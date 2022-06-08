import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import {ava} from "../../img/img";
import {connect} from "react-redux";
import {setDisableNavLinkSidebar} from "../../redux/MainPageReducer";
import React from "react";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';


function Sidebar({disableNavLinkSidebar, setDisableNavLinkSidebar, authMe}) {

    function disable(e) {
        setDisableNavLinkSidebar(e);
    }

    return (
        <nav className={s.sidebar}>
            {authMe
                ?
                <NavLink to="/profile" className={disableNavLinkSidebar ? s.disabledLink : s.active}
                         onClick={() => disable(true)}
                > <HomeIcon className={s.icon}/>Profile</NavLink>
                : null
            }
            <NavLink to="/messages" onClick={() => disable(false)}><ChatIcon className={s.icon}/>Messages</NavLink>
            <NavLink to="/music" onClick={() => disable(false)}><MusicVideoIcon className={s.icon}/>Music</NavLink>
            <NavLink to="/news" onClick={() => disable(false)}><NewspaperIcon className={s.icon}/>News</NavLink>
            <NavLink to="/settings" onClick={() => disable(false)}><SettingsIcon className={s.icon}/>Settings</NavLink>
            <NavLink to="/" onClick={() => disable(false)}><PeopleAltIcon className={s.icon}/>Users</NavLink>
            <div className={s.friend}>
                {authMe
                    ?
                    <div>
                        <NavLink to="/" onClick={() => disable(false)}><PeopleAltOutlinedIcon className={s.icon}/>Friends</NavLink>
                        <div className={s.friendsAva}>
                            <img src={ava} alt="ava"/>
                            <img src={ava} alt="ava"/>
                            <img src={ava} alt="ava"/>
                        </div>
                    </div>
                    : null
                }
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        authMe: state.authorization.authMe,
        disableNavLinkSidebar: state.profilePage.disableNavLinkSidebar,
    };
};

export default connect(mapStateToProps, {setDisableNavLinkSidebar})(Sidebar);
