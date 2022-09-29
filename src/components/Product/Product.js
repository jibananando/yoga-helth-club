import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, age, time } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>For age: {age}</p>
            <p>Time required: {time}</p>
        </div>
    );
};

export default Product;