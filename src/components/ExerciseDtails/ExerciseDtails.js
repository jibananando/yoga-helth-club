import React from 'react';
import './ExerciseDtails.css'

const ExerciseDtails = ({ timeData }) => {
    return (
        <div className='exercise-details'>
            <div>
                <h5>Exercise Details</h5>
                <h6>Exercise time: {timeData}</h6>
                <h6>Break time</h6>
                <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default ExerciseDtails;