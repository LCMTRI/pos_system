import React from "react";
import "./Receipt.css";
import {
  faMoneyBill,
  faCreditCard,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

function Receipt({ total }) {
  const { orderState, orderDispatch } = useContext(OrderContext);

//   const handleDes = () => {
//     setNum(--num)
//     if (num === 0) 
//         orderDispatch({type: 'DELETE', payload: {name: name}})
//     else 
//         orderDispatch({type: 'DES', payload: {name: name, no: num, price: price}})
//     }

    return (
    <div className="rec-container">
      <div className="rec-content">
        <div className="header">
          <span>Receipt</span>
        </div>
        <div className="body">
          <span id="total">Total</span>
          <span id="price">{total.toLocaleString()} VNĐ</span>
        </div>
        <div className="payment-method">
          <span>Payment method</span>
          <div className="methods">
            <div className="column">
              <div className="cash">
                <FontAwesomeIcon icon={faMoneyBill} />
              </div>
              <span>Cash</span>
            </div>
            <div className="column">
              <div className="debit-card">
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
              <span>Debit Card</span>
            </div>
            <div className="column">
              <div className="e-wallet">
                <FontAwesomeIcon icon={faWallet} />
              </div>
              <span>E-Wallet</span>
            </div>
          </div>
        </div>
        <div className="place-order">
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
