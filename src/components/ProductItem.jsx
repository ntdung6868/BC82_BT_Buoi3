import React from "react";

const ProductItem = ({ item, setStateModal }) => {
  return (
    <div className="col-4 mb-4">
      <div className="card">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.shortDescription}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary" onClick={() => setStateModal(item)}>
              Chi tiết
            </button>
            <p className="mb-0">${item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
