import React from 'react';

const ItemChanger = (props) => {
    const { selectedQuantity, minItemCount = 0, maxItemCount, onAdd, onRemove} = props;
    return <div className="d-flex flex-row-wrapper" style={{ marginTop: 27}}>
        <span className={`material-icons md-24 grey ${selectedQuantity > minItemCount ? 'cursor' : 'inactive'}`}
         onClick={onRemove}>remove_circle_outline</span>
        <p className="item-counter"> { selectedQuantity }</p>
        <span className={`material-icons md-24 grey ${selectedQuantity < maxItemCount ? 'cursor' : 'inactive'}`}
        onClick={onAdd}>add_circle_outline</span>
    </div>;
}

export default ItemChanger;