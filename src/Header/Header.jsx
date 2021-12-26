import  './Header.css';
import {imageForHeader} from "../img/img";

function Header() {
    return (
        <header className='header'>
            <img src={imageForHeader} alt='imageForHeader'/>
        </header>

    );
}

export default Header;
