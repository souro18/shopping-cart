import React from 'react';
import { itemPresentInCart } from '../helpers';
import Product from './Product';

const Products = ({ products, addToCart, cart, removeItem }) => {
    return <div className="d-flex flex-three px-20 flex-col-wrapper">
        <h3>Products</h3>
        <div className="flex-row-wrapper d-flex product-container">
        {
            products.map(product => {
                return <Product
                item={product}
                key={product.id}
                addToCart={addToCart}
                removeItem={removeItem}
                isSelected={itemPresentInCart(cart.items, product.id)}
                selectedQuantity={cart.items[product.id]?.selectedQuantity}/>
            })
        }
        </div>
    </div>
};

export default Products;