import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const itemCount = Object.keys(props.cart?.items).length;
    const hasItemInCart = itemCount > 0;
    return <div className="header-container">
       <div className="d-flex flex-row-wrapper header flex-one">
       <h3>TeeRex Store</h3>
        <div><Link to={hasItemInCart ? '/cart' : '#'}  style={{ textDecoration: 'none' }}>
            <div className="icon">
            <span className={`material-icons white md-24 ${hasItemInCart ? '' : 'inactive'}`}>shopping_cart</span>
            {
                hasItemInCart ? <p className="item-count">{itemCount}</p> : null
            }
            </div>
           
        </Link></div>
       </div>
    </div>
}

export default Header;