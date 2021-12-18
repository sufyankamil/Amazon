import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, price, image }) {
    // pull -> cart, push -> dispatch
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        // remove the item from the cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        });


    
    }




    return (
        <div className='checkoutProduct'>
            <img className='checkoutProductImage' src={image} alt='' />

            <div className='checkoutProduct--info'>
                <p className='checkoutProduct--title'>{title}</p>
                <p className='checkoutProduct--price'>
                    <bold>₹</bold>
                    <strong>{price}</strong>
                </p>
                <button className='product--button--exit' onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct