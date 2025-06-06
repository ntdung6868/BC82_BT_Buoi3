import React from "react";

const Modal = ({ content, onClose }) => {
  if (!content) return null;

  return (
    <div className="modal" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{content.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img src={content.image} className="img-fluid mb-3" alt={content.name} />
            <p>{content.description}</p>
            <p className="mb-0">Giá: ${content.price}</p>
            <p className="mb-0">Số lượng: {content.quantity}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
