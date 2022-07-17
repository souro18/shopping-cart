import React from 'react';
import { debounce, itemPresentInCart } from '../helpers';
import Product from './Product';

const Products = ({ products, addToCart, cart, removeItem, onSearchText }) => {
    const debouncedOnSearch = debounce(onSearchText, 400);
    return <div className="d-flex flex-three px-20 flex-col-wrapper">
        <h3>Products</h3>
        <input placeholder="search" className="search-box" onChange={(e) =>debouncedOnSearch(e.target.value)} />
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
        {
            products.length === 0 ? <p>No items found</p> : null
        }
        </div>
    </div>
};

export default Products;