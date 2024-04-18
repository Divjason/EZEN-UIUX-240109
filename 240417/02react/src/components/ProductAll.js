import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    const url = "http://localhost:3004/products";
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Row>
        {productList.map((item) => (
          <Col lg={3}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
