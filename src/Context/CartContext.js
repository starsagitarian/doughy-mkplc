/* eslint-disable */

import React, {useState, createContext, useEffect} from 'react';

export const AppContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || '[]';


export const Provider = (props) => {
  const [cart, setCart] = useState(cartFromLocalStorage);

  function emptyCart() {
    setCart([])
  }

   function addToCart(product){
    const exist = cart.find(item => item.ProductId === product.ProductId); 
    if (exist) {
      setCart(cart.map(item => item.ProductId === product.ProductId? {...exist, Qty:exist.Qty + 1 }: item ))
    } else {
      setCart([...cart, {...product, Qty:1}])
    }
    }

  const removeFromCart = (product) => {
      const exist = cart.find(item => item.ProductId === product.ProductId); //find in the cart if a prod match
      if (exist.Qty === 1) {
        setCart(cart.filter(item => item.ProductId !== product.ProductId))
      } else {
        setCart(
          cart.map(item => item.ProductId === product.ProductId? {...exist, Qty:exist.Qty -1}:item)
        )
      }
    }

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);
    
    return (
      <AppContext.Provider value={[cart, setCart,  emptyCart, addToCart, removeFromCart] }>
      {props.children}
    </AppContext.Provider>
  )
}

