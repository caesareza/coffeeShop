// Import library react
import React from "react";
import './Navbar.css';
import Logo from "./../../assets/images/logo_black-9.png";
import MenuItem from "./MenuItem";
import { Link } from 'react-router-dom';
import About from './../About/About';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="CoffeeKing" />
                <span></span>
            </div>
            <ul className="nav-links">
                {/* Menu di bawah ini menggunakan reusable component */}
                <MenuItem title="Home">
                <li><a href="/">Coffee Market</a></li>
                <li><a href="/">Light Version</a></li>
                </MenuItem>

                <Link to="/About">
                <MenuItem title="About">
                <li><Link href="/">About Us</Link></li>
                <li><Link href="/">Delivery</Link></li>
                <li><Link href="/">Events</Link></li>
                <li><Link href="/">Special Offers</Link></li>
                <li><Link href="/">Testimonials</Link></li>
                <li><Link href="/">Team</Link></li>
                <li><Link href="/">FAQ</Link></li>
                </MenuItem>
                </Link>

                <MenuItem title="Products">
                <li><a href="/">Shop</a></li>
                <li><a href="/">Cart</a></li>
                <li><a href="/">Checkout</a></li>
                <li><a href="/">My account</a></li>
                </MenuItem>

                {/*<MenuItem title="Blog">
                <li><a href="/">Blog One Column</a></li>
                <li><a href="/">Blog Two Columns</a></li>
                <li><a href="/">Blog Three Columns</a></li>
                </MenuItem>

                <MenuItem title="Gallery">
                <li><a href="/">Gallery 2-columns</a></li>
                <li><a href="/">Gallery 3-columns</a></li>
                <li><a href="/">Gallery 4-columns</a></li>
                </MenuItem>

                <li><a href="/">Contacts</a></li>

                <MenuItem title="Pages">
                <li><a href="/">Typography</a></li>
                <li><a href="/">Form Elements</a></li>
                <li><a href="/">Shortcodes</a></li>
                <li><a href="/">Lists</a></li>
                <li><a href="/">404 Page</a></li>
                <li><a href="/">Cooming Soon</a></li>
                <li><a href="/">Under Construction</a></li>
                </MenuItem>*/}
            </ul>
            <div className="actions">
                <a href="/"><i className="fa-solid fa-cart-shopping"></i></a>
                <a href="/"><i className="fa-solid fa-search"></i></a>
            </div>

        </nav>
    )
}

export default Navbar;