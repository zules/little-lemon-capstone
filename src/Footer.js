import FooterLogo from './FooterLogo';

export default function Footer() {
    return (
        <footer>
            <FooterLogo />
            <nav>
                <div>
                <h3>Navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
                </div>
                <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
                </div>
                <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
                </div>
            </nav>
        </footer>
    )
}