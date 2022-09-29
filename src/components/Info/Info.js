import React from 'react';
import Break from '../Break/Break';
import './Info.css'

const Info = () => {
    return (
        <div className='info-field'>
            <div>
                <h5>Jibananando Pramanik</h5>
                <p>Age: 25 years</p>
                <p>Rajshahi, Bangladesh</p>
                <p>Student of Programming Hero</p>
            </div>
            <div>
                <h5>Add A Break</h5>
                <div>
                    <Break></Break>
                </div>
            </div>
        </div>

    );
};

export default Info;