import {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header>
            <Link to="/"><img src="Logo.svg" /></Link>
            <div className="menu-area">
            <span onClick={toggleMenu} className="material-icons-outlined hamburger-icon">menu</span>
            <nav className={`${isOpen ? 'active' : ''}`}>
            <ul className="topnav">
                <Link to="/"><li>Home</li></Link>
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