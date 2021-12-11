import  './Header.css';

const imageForHeader = "https://st.depositphotos.com/1003348/2140/i/600/depositphotos_21405631-stock-photo-bright-sunset-panorama.jpg"

function Header() {
    return (
        <header className='header'>
            <img src={imageForHeader} alt='imageForHeader'/>
        </header>

    );
}

export default Header;
