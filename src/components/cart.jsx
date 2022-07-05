import React from "react";
import { Link } from "react-router-dom";
import ItemChanger from "./ItemChanger";

const Cart = ({ cart, addToCart, removeItem }) => {
    return <div className="app-container">
        <div className="box-shadow d-flex flex-col-wrapper cart flex-one">
        {Object.values(cart.items).map(item => {
            return <div key={item.id} className="pa-16 d-flex flex-row-wrapper align-center cart-item">
                <img src={item.imageURL} className="cart-img"/>
                <div className="flex-one px-20">
                    <div className="d-flex flex-row-wrapper">
                        <h4>{item.name}</h4>
                        <span className="material-icons md-10 grey"
         onClick={() => removeItem(item.id, true)}>delete</span>
                    </div>
                    <div>
                        <ItemChanger
                            minItemCount={0}
                            maxItemCount={item.quantity}
                            selectedQuantity={item.selectedQuantity}
                            onAdd={() => addToCart(item)}
                            onRemove={() => removeItem(item.id)}
                        />
                    </div>
                </div>
                <div>
                   <h4>{item.selectedQuantity * item.price }</h4>
                </div>
                </div>
        })}
        {Object.values(cart.items).length === 0 ? <div> No items in cart. Click
            <Link to="/"> here</Link> to add
            </div>
            : null}
        </div>
    </div>
}

export default Cart;