import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment--container">
        {/* Delivery Address */}
        <div className="payment--section">
            <h3>Delivery Address</h3>
            <div className="payment--address">
                <p>{user?.email}</p>
                <p>123, ABC Street</p>
                <p>New York, NY</p>
            </div>
        </div>
        
        {/* Review Items */}
        <div className="payment--section">
            <h3>Review Items and Delivery</h3>
                
        </div>
        
        {/* Payment Method */}
        <div className="payment--section">

        </div>
        
        {/* Place Order */}
        <div className="payment--section">

        </div>
      </div>
    </div>
  );
}

export default Payment;
