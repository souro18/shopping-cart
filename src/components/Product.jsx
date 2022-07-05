import React from 'react';
import ItemChanger from './ItemChanger';

const Product = (props) => {
    const { item, addToCart, isSelected, selectedQuantity, removeItem } = props;
    return <div className="product box-shadow d-flex flex-col-wrapper">
        <img src={item.imageURL} className="img-container" alt={item.name}/>
        <h4>{item.name}</h4>
        <span>Rs. {item.price}</span>
        {
            isSelected ? <ItemChanger
            selectedQuantity={selectedQuantity}
            minItemCount={0}
            maxItemCount={item.quantity}
            onAdd={() => addToCart(item)}
            onRemove={() => removeItem(item.id)}
            /> : <button className="btn" onClick={() => addToCart(item)}>Add to Cart</button>
        }
        
    </div>
}

export default React.memo(Product);