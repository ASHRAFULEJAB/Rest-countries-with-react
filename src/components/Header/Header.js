import React from 'react';
import './Header.css'

const Header = () => {
    return (
        
        <div>
            <h1>Welcome to Rest Countries!!</h1>
            <nav>
            <a href="/home">Home</a>
            <a href="/country">Country</a>
            <a href="/about-us">About Us</a>
            </nav>
        </div>
    );
};

export default Header;