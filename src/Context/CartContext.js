import React, {useState, createContext, useEffect} from 'react';


export const AppContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || '[]';


export const Provider = (props) => {
  const [cart, setCart] = useState(cartFromLocalStorage);

  function emptyCart() {
    setCart([])
  }
// ---------- original add to cart
  // function addToCart(cart, product){
  //   console.log('Product', product )
  //   console.log('Cart', cart )
  //   setCart([...cart, product]);
  //   }

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



//  ------- Original cartTotal  ---- [cartTotal,]
  // function cartTotal(cart) {
  //   const total = cart.reduce((a, b) => +a + +b.ProductPrice, 0);
  //   return total;
  // }
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);
  
  return (
    <AppContext.Provider value={[cart, setCart,  emptyCart, addToCart, removeFromCart] }>
      {props.children}
    </AppContext.Provider>
  )
}


// import  React, { Component, createContext} from 'react';

// export const CartContext = createContext();

// class CartContextProvider extends Component {

//   state = {
//     isCartEmpty: true,
//     cartItems:[],
//   } 

//   toggleCart = () =>{
//     this.setState({isCartEmpty:false,})

//   }  
  
//   render() {
//     return (
// <CartContext.Provider value={...this.state, this.toggleCart}>
//   {this.props.children}
// </CartContext.Provider>
//     )
//   }
// }

