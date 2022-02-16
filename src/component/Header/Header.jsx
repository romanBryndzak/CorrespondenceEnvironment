import './Header.css';
import {ava, imageForHeader} from "../../img/img";
import Preloader from "../../auxiliaryTools/Preloader";
import React from "react";
import {NavLink} from "react-router-dom";

function Header({authMe, isFetching, ...props}) {
    const {photos, fullName} = props.infoUser;

    let userAva;
    if (photos.small === null) {
        userAva = ava;
    } else {
        userAva = photos.small;
    }

    return (
        <header className="header">
            <img src={imageForHeader} className="imageForHeader" alt='imageForHeader'/>
            <div className="containerAuthorization">
                {isFetching ? <Preloader width={"50px"}/> :
                    <div>
                        {authMe ? <div>{fullName}</div> : <div>.</div>}
                        <img className="photoUserAuthorization" src={userAva} alt=""/>
                    </div>
                }
                {authMe
                    ?
                    <button onClick={() => {
                        props.logout()
                    }}>logout</button>
                    :
                    <NavLink to={"/login"}>
                        <button>login</button>
                    </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
