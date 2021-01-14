import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom'
import { AppContext } from '../Context/CartContext'
import DB from '../DB/db.json';
import { useHistory } from "react-router-dom";

function Detail () {
  const [cart, _,  __, addToCart] = useContext(AppContext)
  let history = useHistory(); 
  const db = DB;  
  let {id} = useParams()
  const bakery = db[id];


  // function addToCart(cart, product){
  //   console.log('Product', product);
  //   const prod = product;
  //   setCart([...cart,prod]);
  //   //  cart && cart.map(item => console.log(item.name))
  //   }

    return (
      <>
       <button onClick={history.goBack}>go back</button>
      <div className="detail-div">
      <div className="product-div">

      {bakery && <h1>{bakery.name}</h1>}
      {bakery && <h1>{bakery.Description}</h1>}

      {bakery && bakery.Products.map(product => {
          return(
            <div className="product-card" key={product.ProductId}>
                <h4>{product.ProductName}</h4>
                <h5>{product.ProductPrice}$</h5>
                <p>{product.ProductDescription}</p>
                { cart.length === 0 ? <button onClick={() => {console.log('clicked'); addToCart(product)}}>Add to empty cart</button> : <button onClick={() => addToCart(product)}>Add more </button>}
                {/* { <button onClick={() => emptyCart()}>Remove Item Cart</button>} */}
                {/* { <button onClick={() => emptyCart()}>Empty Cart</button>} */}
            </div>
          )
      })}
  </div>
  </div>
  </>
)
}

export default Detail;

{/* <h1> Id {id} </h1>
{item && <p>Bakery Name: {item.name}</p>}

// useEffect(() => {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then(response => response.json())
//             .then(data => setItem(data))
// }, [])

// const cartItems = cart.map((el) => (
    //   <div key={el.id}>
    //     {`${el.name}: $${el.price}`}
    //     <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    //   </div>
    // ));

    <button onClick={addToCart}>Add</button> */}