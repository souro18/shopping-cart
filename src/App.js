import './App.css';
import React, { useCallback, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/cart';
import Header from './components/Header';
import { itemPresentInCart } from './helpers';
function App() {
  const [ cart, setCart] = useState({ items: {}, summary: { totalPrice: 0, totalItems: 0}});

  const addToCart = useCallback((item) => {
    const presentCart = { ...cart };
    if(itemPresentInCart(presentCart.items, item.id)) {
      presentCart.items[item.id].selectedQuantity += 1;
    } else {
      presentCart.items[item.id] = {
        ...item,
        selectedQuantity: 1
      }
    }
    presentCart.summary.totalItems += 1;
    presentCart.summary.totalPrice += item.price;
    setCart(presentCart);
  }, [cart]);

  console.log(cart);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard addToCart={addToCart} cart={cart}/>}/>
        <Route path="/cart" element={<Cart cart={cart}/>}/>
      </Routes>
    </div>
  );
}

export default App;