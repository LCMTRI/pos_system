import React, { useContext } from "react";
import { useState } from "react";
import "./ItemCard.css";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OrderContext } from "../../contexts/OrderContext";

const ItemCard = ({ price, name, amount, discount, bgcolor }) => {
  let [state, setState] = useState(false);
  const [visible, setVisible] = useState(true);
  const { orderState, orderDispatch } = useContext(OrderContext);

  let toggle = () => {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const removeElement = () => {
    setVisible((prev) => !prev);
    orderDispatch({type: 'DELETE', payload: {name: name}})
  };

  return (
    <div>
      {visible && (
        <div className="item-container">
          <div className="underlay" onClick={removeElement}>
            <FontAwesomeIcon icon={faTrash} color="#E04A48" />
          </div>
          <div
            className="card-overlay"
            onClick={toggle}
            style={
              state
                ? { transform: "translate(51px, 0%)" }
                : { transform: "translate(0%, 0%)" }
            }
          >
            <div className="content">
              <div className="item-name">
                <span>{name}</span>
              </div>
              <div className="amount">
                <span>x{amount}</span>
              </div>
              <div className="debt">
                <span>{discount ? (Math.round(price * (1 - discount / 100)) * amount).toLocaleString() : (price * amount).toLocaleString()} VNĐ</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;

// style={ "transform: translate(40%, 0%)" : "transform: translate(0%, 0%)"}
