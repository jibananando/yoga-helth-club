import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <h1>Rajshahi Active Club</h1>
            </div>
            <div className='cart-container'>
                <h4>Order summary</h4>
            </div>
        </div>
    );
};

export default Header;