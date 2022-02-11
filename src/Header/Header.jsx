import './Header.css';
import {ava, imageForHeader} from "../img/img";
import Preloader from "../auxiliaryTools/Preloader";
import React from "react";
import {NavLink} from "react-router-dom";

function Header(props) {
    let userAva;
    if (props.infoUser.photos.small === null) {
        userAva = ava;
    } else {
        userAva = props.infoUser.photos.small;
    }

    return (
        <header className="header">
            <img src={imageForHeader} className="imageForHeader" alt='imageForHeader'/>
            <div className="containerAuthorization">
                {props.isFetchingAuth ? <Preloader width={"50px"}/> :
                    <div>
                        <img className="photoUserAuthorization" src={userAva} alt=""/>
                        {props.authMe ? <div>{props.infoUser.fullName}</div> : ''}
                    </div>
                }
                {props.authMe
                    ?
                    <button onClick={() => {
                        props.logout()
                    }}>logout</button>
                    :
                    <NavLink style={{color: "white"}} to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
