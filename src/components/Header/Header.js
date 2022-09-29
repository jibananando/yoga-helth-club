import React from 'react';
import Exercise from '../Exercise/Exercise';
import Summary from '../Summary/Summary';
import './Header.css'

const Header = () => {
    return (
        <div className='header-field'>
            <div >
                <h2 className='header' >Yoga Helth Club</h2>
                <Exercise></Exercise>
            </div>
            <div>
                <Summary></Summary>
            </div>
        </div>
    );
};

export default Header;