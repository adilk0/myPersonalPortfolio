import React from 'react';
import logo from '../images/main-logo.png';

export const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul className="navbar">
                        <div className="logo">
                            <a href="#home"><img src={logo} alt="Logo" /></a>
                        </div>
                            <div className="nav-style">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about_me">About Me</a></li>
                                <li><a href="#project">Project</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </div>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;