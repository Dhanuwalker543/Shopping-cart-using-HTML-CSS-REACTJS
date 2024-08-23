

import React, { useReducer } from 'react';
import { cartReducer, initialState } from './cartReducer';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const CartContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

const CartItems = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const CartItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
`;

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const handleAddItem = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    const handleRemoveItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    };

    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];

    return (
        <CartContainer>
            <h2>Products</h2>
            <ProductList>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={handleAddItem} />
                ))}
            </ProductList>
            
            <h2>Shopping Cart</h2>
            <CartItems>
                {state.cart.map((item) => (
                    <CartItem key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <div>
                            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </div>
                    </CartItem>
                ))}
            </CartItems>
        </CartContainer>
    );
};

export default ShoppingCart;
