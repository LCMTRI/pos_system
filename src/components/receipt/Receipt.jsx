import React, { useEffect, useState } from "react";
import "./Receipt.css";
import {
  faMoneyBill,
  faCreditCard,
  faWallet,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import Modal from '../modal/Modal';

function Receipt({ total }) {
  const { orderState, orderDispatch } = useContext(OrderContext);
  const [toggleState, setToggleState] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const togglePayment = (index) => {
    setToggleState(index);
  };

    useEffect(() => {
      console.log("post delete: ", orderState.confirmData);
    }, [orderState.confirmData]);

  const handleClick = () => {
    orderDispatch({
      type: "CONFIRM_ORDER",
      payload: { data: orderState.data },
    });
    orderState.confirmData = [];
    setOpenModal(true)
  };

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
              <div
                className={toggleState === 1 ? "cash active-method" : "cash"}
                onClick={() => togglePayment(1)}
              >
                <FontAwesomeIcon icon={faMoneyBill} />
              </div>
              <span>Cash</span>
            </div>
            <div className="column">
              <div
                className={
                  toggleState === 2 ? "debit-card active-method" : "debit-card"
                }
                onClick={() => togglePayment(2)}
              >
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
              <span>Debit Card</span>
            </div>
            <div className="column">
              <div
                className={
                  toggleState === 3 ? "e-wallet active-method" : "e-wallet"
                }
                onClick={() => togglePayment(3)}
              >
                <FontAwesomeIcon icon={faWallet} />
              </div>
              <span>E-Wallet</span>
            </div>
          </div>
        </div>
        <div className="place-order">
          <button onClick={handleClick} >Place Order</button>
          <Modal 
          open={openModal} 
          onClose={() => setOpenModal(false)} 
          order={orderState.confirmData} />
        </div>
      </div>
    </div>
  );
}

export default Receipt;
