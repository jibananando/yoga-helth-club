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
                <h2 className='header' >Yoga Helth Club</h2>
                <Exercise clickBtn={clickBtn}></Exercise>
            </div>
            <div>
                <Summary timeData={timeData}></Summary>
            </div>
        </div>
    );
};

export default Header;