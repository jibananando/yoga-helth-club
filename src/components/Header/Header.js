import React, { useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Summary from '../Summary/Summary';
import './Header.css'

const Header = () => {
    const [timeData, setTimeData] = useState(0);
    const clickBtn = (time) => {
        console.log("click");
        setTimeData(timeData + time);
    }
    return (
        <div className='header-field'>
            <div >
                <img className='header-img' src="https://cdn-icons-png.flaticon.com/512/69/69840.png" alt="" />
                <span className='header' >Yoga Helth Club</span>
                <Exercise clickBtn={clickBtn}></Exercise>
            </div>
            <div>
                <Summary timeData={timeData}></Summary>
            </div>
        </div>
    );
};

export default Header;