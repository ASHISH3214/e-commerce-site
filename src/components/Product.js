import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <span style={{ fontWeight: "bold" }}>{product.name}</span>
          </Card.Title>
        </Link>
      </Card.Body>

      <Container>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
      </Container>
      <Container>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Container>
    </Card>
  );
};

export default Product;
