import React from 'react';
import './Break.css'

const Break = () => {
    const breakTimeArry = [
        { id: 1, break: '10m' },
        { id: 2, break: '15m' },
        { id: 3, break: '20m' },
        { id: 4, break: '25m' },
        { id: 5, break: '30m' }
    ]

    return (
        <div>
            {
                breakTimeArry.map(item => <span className='break-time' key={item.id}>{item.break}</span>)
            }
        </div>
    );
};

export default Break;