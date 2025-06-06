import React, { useState } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import { products } from "../data/products";

const ShoesStore = () => {
  const [productDetail, setProductDetail] = useState(null);

  const setStateModal = (product) => {
    setProductDetail(product);
  };

  const closeModal = () => {
    setProductDetail(null);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Shoes Store</h1>
      <ProductList productsData={products} setStateModal={setStateModal} />
      <Modal content={productDetail} onClose={closeModal} />
    </div>
  );
};

export default ShoesStore;
