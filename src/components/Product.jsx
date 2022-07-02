import React from 'react';

const Product = (props) => {
    const { item, addToCart, isSelected, selectedQuantity } = props;
    console.log(isSelected, item)
    return <div className="product box-shadow d-flex flex-col-wrapper">
        <img src={item.imageURL} className="img-container" alt={item.name}/>
        <p>{item.name}</p>
        <span>Rs. {item.price}</span>
        {
            isSelected ? <span>{selectedQuantity}</span> : null
        }
        <button className="btn" onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
}

export default React.memo(Product);