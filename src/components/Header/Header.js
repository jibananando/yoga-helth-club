import React from 'react';
import Exercise from '../Exercise/Exercise';
import './Header.css'

const Header = () => {
    return (
        <div className='header-field'>
            <div >
                <h2 className='header'>Yoga Helth Club</h2>
                <Exercise></Exercise>
            </div>
            <div>
                <h4>Summary</h4>
            </div>
        </div>
    );
};

export default Header;