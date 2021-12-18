import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({id, title, price, image }) {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProductImage' src={image} alt=''/>

            <div className='checkoutProduct--info'>
                <p className='checkoutProduct--title'>{title}</p>
                <p className='checkoutProduct--price'>
                <bold>₹</bold>
                <strong>{price}</strong>
                </p>
            </div>
            <button>Remove From Cart</button>
        </div>
    )
}

export default CheckoutProduct