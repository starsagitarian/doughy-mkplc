import React, {useState, createContext, useEffect} from 'react';

export const AppContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || '[]';



export const Provider = (props) => {
  const [cart, setCart] = useState(cartFromLocalStorage);


 

  // function emptyCart() {
  //   setCart([])
  // }
  
  function myFunction(cart) {
    const total = cart.reduce((a, b) => +a + +b.ProductPrice, 0);
    console.log('total', total)
    return total;
  }
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);
  
  return (
    <AppContext.Provider value={[cart, setCart, myFunction] }>
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

