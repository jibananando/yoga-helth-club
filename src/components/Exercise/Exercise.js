import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Exercise.css'

const Exercise = ({ clickBtn }) => {
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
                        clickBtn={clickBtn}
                    ></Product>)
                }
            </div>
            <div>
                <div class="accordion accordion-flush container" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                How to does react work?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">ReactJS divides the UI into isolated reusable pieces of code known as components.
                                React components work similarly to JavaScript functions as they accept arbitrary
                                inputs called properties or props. It's possible to have as many components as
                                necessary without cluttering your code.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                different between props and state
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Props are used to pass data from one component to another. The state is a local
                                data storage that is local to the component only and cannot be passed to other
                                components. The this. setState property is used to update the state values in
                                the component.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Why is useEffect used?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">The motivation behind the introduction of useEffect Hook is to eliminate the
                                side-effects of using class-based components. For example, tasks like updating
                                the DOM, fetching data from API end-points, setting up subscriptions or timers,
                                etc can be lead to unwarranted side-effects</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise;