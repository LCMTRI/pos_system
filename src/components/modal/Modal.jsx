import { faCheckCircle, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="modalContent">
          {order.length === 0 ? (<div>
            <FontAwesomeIcon icon={faCircleXmark} style={{fontSize: "80px", color: "#e63946", marginBottom: "30px"}} />
            <h2>Đơn hàng đang bị trống!</h2>
          </div>) : (<div>
            <FontAwesomeIcon icon={faCheckCircle} style={{fontSize: "80px", color: "#a7c957", marginBottom: "30px"}} />
            <h2>Đơn hàng được đặt thành công!</h2>
          </div>)}
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
