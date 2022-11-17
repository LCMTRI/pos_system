import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const Modal = ({ open, onClose, order }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div onClick={onClose} className="modalOverlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <div className="modalContent">
            {order.length === 0 ? (<div>Nooo</div>) : (<div>Yes, Sirrr!!</div>)}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
