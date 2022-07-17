import './App.css';
import React, { useCallback, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Header from './components/Header';
import { itemPresentInCart } from './helpers';
function App() {
  const [ cart, setCart] = useState({ items: {}, summary: { totalPrice: 0, totalItems: 0}});
  const [showMobileFilter, setShowMobileFilter] =useState(false);

  const addToCart = useCallback((item) => {
    if((item.selectedQuantity || 0) < item.quantity) {
      const presentCart = { ...cart };
      if(itemPresentInCart(presentCart.items, item.id)) {
        presentCart.items[item.id].selectedQuantity += 1;
      } else {
        presentCart.items[item.id] = item;
        presentCart.items[item.id].selectedQuantity = 1;
      }
      presentCart.summary.totalItems += 1;
      presentCart.summary.totalPrice += item.price;
      setCart(presentCart);
    } else {
      alert(`max ${item.quantity} items can be added`);
    }
    
  }, [cart]);

  const removeItem = useCallback((itemId, removeAll = false) => {
    const presentCart = { ...cart };
    if(presentCart.items[itemId].selectedQuantity > 0) {
      
      let removeCount = 1;
      let removedItemPrice = presentCart.items[itemId].price;
      if(removeAll) {
        removeCount = presentCart.items[itemId].selectedQuantity;
        removedItemPrice = removeCount * presentCart.items[itemId].price;
        delete presentCart.items[itemId];
      } else {
        presentCart.items[itemId].selectedQuantity -=1
        if( presentCart.items[itemId].selectedQuantity === 0) {
          delete presentCart.items[itemId]
        }
      }
      presentCart.summary.totalItems -= removeCount;
      presentCart.summary.totalPrice -= removedItemPrice;
      setCart(presentCart);
    }
    
  }, [cart]);

  const onMenu = useCallback(() => {
    setShowMobileFilter(!showMobileFilter);
  }, [showMobileFilter]);
  return (
    <div>
      <Header cart={cart} onMenu={onMenu}/>
      <Routes>
        <Route path="/" element={<Dashboard addToCart={addToCart} removeItem={removeItem} cart={cart} showMobileFilter={showMobileFilter}/>}/>
        <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} removeItem={removeItem}/>}/>
      </Routes>
    </div>
  );
}

export default App;
