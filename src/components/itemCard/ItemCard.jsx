import React from "react";
import { useState } from "react";
import "./ItemCard.css";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemCard = ({ num, name, amount }) => {
  let [state, setState] = useState(false);
  const [visible, setVisible] = useState(true);

  let toggle = () => {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      {visible && (
        <div className="item-container">
          <div className="underlay" onClick={removeElement}>
            <FontAwesomeIcon icon={faTrash} color="#E04A48" />
          </div>
          <div
            className="overlay"
            onClick={toggle}
            style={
              state
                ? { transform: "translate(51px, 0%)" }
                : { transform: "translate(0%, 0%)" }
            }
          >
            {/* <div className="order">
              <span>{num}</span>
            </div> */}
            <div className="content">
              <div className="food-name">
                <span>{name}</span>
              </div>
              <div className="amount">
                <span>x{amount}</span>
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