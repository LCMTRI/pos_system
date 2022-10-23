import React from "react";
import { useState } from "react";
import "./ItemCard.css";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemCard = ({ num, message }) => {
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
            <FontAwesomeIcon icon={faTrash} color="#E04A48" size="lg"/>
          </div>
          <div
            class="overlay"
            onClick={toggle}
            style={
              state
                ? { transform: "translate(68px, 0%)" }
                : { transform: "translate(0%, 0%)" }
            }
          >
            <div className="order">{num}</div>
            <div className="text">{message}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
