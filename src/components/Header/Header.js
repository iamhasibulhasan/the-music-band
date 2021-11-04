import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <nav className="menu">
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/albums">Albums</a></li>
                            <li><a href="/live">Live</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;