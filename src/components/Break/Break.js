import React, { useState } from 'react';
import ExerciseDtails from '../ExerciseDtails/ExerciseDtails';
import './Break.css'

const Break = ({ timeData }) => {
    const [breakTime, setBreakTime] = useState(null);
    const breakTimeArry = [
        { id: 1, break: '10m' },
        { id: 2, break: '15m' },
        { id: 3, break: '20m' },
        { id: 4, break: '25m' },
        { id: 5, break: '30m' }
    ]
    const handleBreak = (item) => {
        setBreakTime(item);
        localStorage.setItem('Break', JSON.stringify(item));
    }



    return (
        <div>
            {
                breakTimeArry.map(item => <span onClick={() => handleBreak(item)} className='break-time' key={item.id}>{item.break}</span>)
            }
            <ExerciseDtails timeData={timeData} breakTime={breakTime}></ExerciseDtails>
        </div>
    );
};

export default Break;