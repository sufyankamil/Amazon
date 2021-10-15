import React from 'react';
import "./Subtotal.css";


// eslint-disable-next-line no-unused-vars
function Subtotal() {
    return (
        <div className="subtotal">
            <p>Subtotal (0 items): <strong>0</strong></p>
            <small className="subtotal--gift">
                <input type="checkbox" /> This order contains a gift
            </small>

            <button className="">Proceed to Checkout</button>


        </div>
    );
}

export default Subtotal;