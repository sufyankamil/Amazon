import React from 'react';
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from 'react-currency-format';

// eslint-disable-next-line no-unused-vars
function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <>


                        <p>Subtotal ({cart.length} items): <strong>0</strong></p>
                        <small className="subtotal--gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

            />

            <button className="">Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;