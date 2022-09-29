import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Exercise.css'

const Exercise = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h4 className='todays-exercise'>Select today's exercise</h4>
            <div className='exercise-field'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Exercise;