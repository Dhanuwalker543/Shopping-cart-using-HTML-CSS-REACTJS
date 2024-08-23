
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
    margin: 20px;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
    }
`;

const ProductName = styled.h3`
    font-size: 1.5em;
    color: #333;
`;

const Price = styled.p`
    font-size: 1.2em;
    color: #666;
`;

const Button = styled.button`
    padding: 10px 20px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #0056b3;
    }
`;

const ProductCard = ({ product, onAddToCart }) => (
    <Card>
        <ProductName>{product.name}</ProductName>
        <Price>${product.price}</Price>
        <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
    </Card>
);

export default ProductCard;
