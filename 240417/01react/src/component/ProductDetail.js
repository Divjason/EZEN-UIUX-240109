import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { device, category, productnum } = useParams();
  return (
    <div>
      <div>ProductDetail</div>
      <div>상품카테고리 : {category}</div>
      <div>매체출력 : {device}</div>
      <div>상품품번 : {productnum}</div>
    </div>
  );
};

export default ProductDetail;
