import React, { useEffect, useState } from 'react';
import './Product.css'

const Product = ({ product, clickBtn }) => {

    const { img, name, age, time } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>For age: {age}</p>
            <p>Time required: {time}</p>
            <button onClick={() => clickBtn(time)}>Add to list</button>
        </div>
    );
};

export default Product;