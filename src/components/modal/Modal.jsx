import { faCheckCircle, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const Modal = ({ open, onClose, order, total, payment }) => {
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
            <h2>Đặt đơn hàng thành công!</h2>
            <hr style={{background: "#2B2D2E", color: "#2B2D2E", borderColor: "#2B2D2E", height: "1.5px", margin: "5px 0px 9px 0px"}} />
            <h3 style={{textAlign: "center", marginBottom: "10px"}}>--- Hóa đơn ---</h3>
            <table style={{borderCollapse: "collapse", borderBottom: "2px solid black"}}>
              <tr style={{borderBottom: "1px solid black"}}>
                <th>STT</th>
                <th style={{width: "110px"}}>Tên món</th>
                <th>SL</th>
                <th style={{width: "90px"}}>Đơn giá</th>
                <th style={{width: "90px"}}>Thành tiền</th>
              </tr>
              {order.map((e, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td style={{textAlign: "left", paddingLeft: "5px"}}>{e.name}</td>
                  <td>{e.no}</td>
                  <td style={{textAlign: "center"}}>{e.price}</td>
                  <td style={{textAlign: "right"}}>{e.price * e.no}</td>
                </tr>
              ))}
            </table>
            <h4 style={{textAlign: "left", marginTop: "10px"}}>Tổng cộng: {total.toLocaleString()} VNĐ</h4>
            <h4 style={{textAlign: "left", marginBottom: "20px"}}>Phương thức thanh toán: {payment === 0 ? "Tiền mặt" : payment === 1 ? "Thẻ ATM" : "Ví điện tử"}</h4>
            <hr style={{background: "#2B2D2E", color: "#2B2D2E", borderColor: "#2B2D2E", height: "1.5px", margin: "5px 0px 9px 0px"}} />
            <h3>Cảm ơn đã sử dụng CosyPOS.<br />Hẹn gặp lại quý khách!</h3>
          </div>)}
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
