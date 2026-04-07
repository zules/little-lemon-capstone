import {useState} from 'react';



export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header>
            <img src="Logo.svg" />
            <div className="menu-area">
            <span onClick={toggleMenu} className="material-icons-outlined hamburger-icon">menu</span>
            <nav className={`${isOpen ? 'active' : ''}`}>
            <ul className="topnav">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            </nav>
            </div>
        </header>
    )
}