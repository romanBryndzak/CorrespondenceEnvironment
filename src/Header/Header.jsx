import './Header.css';
import {imageForHeader} from "../img/img";
import Preloader from "../auxiliaryTools/Preloader";
import React from "react";
import {NavLink} from "react-router-dom";

function Header(props) {
    let userAva = props.infoUser.photos.small

    return (
        <header className="header">
            <img src={imageForHeader} className="imageForHeader" alt='imageForHeader'/>
            <div className="containerAuthorization">
                {props.isFetchingAuth ? <Preloader width={"50px"}/> :
                    <img className="photoUserAuthorization" src={userAva} alt=""/>
                }
                <br/>
                <NavLink style={{color: "white"}} to={"/login"}>Login</NavLink>
            </div>

        </header>

    );
}

export default Header;
