import React from 'react';
import './ExerciseDtails.css'
import { toast } from 'react-toastify';

const ExerciseDtails = ({ timeData,breakTime }) => {
    const notify = () => toast(" It was so hard. I am tired already !");
    return (
        <div className='exercise-details'>
            <div>
                <h5>Exercise Details</h5>
                <h6>Exercise time: {timeData}</h6>
                <h6>Break time: {breakTime?.break}</h6>
                <button onClick={notify}>Activity Completed</button>
            </div>
        </div>
    );
};

export default ExerciseDtails;