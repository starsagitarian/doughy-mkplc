/* eslint-disable */

import React, {useState, createContext, useEffect} from 'react';

export const AppContext = createContext();

const cartFromLocalStorage = [
  {
    ProductId: 0,
    ProductName: 'Sourdough 2lb',
    ProductPrice: '10',
    ProductIngredients:
      "Pain d'Avignon is known for serving some of the best tables and food establishments in New York City, including Michelin star restaurants and hotels.",
    ProductDescription: 'A 2lb Sourdough loaf made with organic, locally sourced flour',
    ProductImg: '/images/seeded.jpg',
    Qty: 1,
  },
];

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
      if (!exist) {
        return;
      } else if (exist.Qty === 1) {
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

