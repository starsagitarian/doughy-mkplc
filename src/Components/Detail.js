import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom'
import { AppContext } from '../Context/CartContext'
import DB from '../DB/db.json';
import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core';

function Detail () {
  const [cart, _,  __, addToCart, remove] = useContext(AppContext)
  let history = useHistory(); 
  const db = DB;  
  let {id} = useParams()
  const bakery = db[id];


    return (
<>
<div>
  <div className=".detail-div">
    <div className="detail-wrapper">
        <div className="detail-header">
        </div>
    </div>
    <div>
      <h1>{bakery.name}</h1>
      <p>{bakery.Description}</p>
    </div>
  </div>
</div>

<div className="detail-div">
      {/* <Button onClick={history.goBack} color="primary" size="small" variant="contained">go back</Button> */}

      <div className="product-div">

      {bakery && bakery.Products.map(product => {
          return(
            <div className="product-card" key={product.ProductId}>
              <div className="product-info-detail">
                  <div className="product-img">
                    
                  </div>
                  <div>
                      <h2>{product.ProductName}</h2>
                      <p>{product.ProductDescription}</p>
                      <h5>{product.ProductPrice}$</h5>
                      { cart.length === 0 ? <button onClick={() => {console.log('clicked'); addToCart(product)}}>+</button> : <button onClick={() => addToCart(product)}>+</button>}
                      { cart.length > 0 ? <button onClick={() => remove(product)}> - </button> : <button> -</button>}
                      {/* { <button onClick={() => emptyCart()}>Remove Item Cart</button>} */}
                      {/* { <button onClick={() => emptyCart()}>Empty Cart</button>} */}
                    </div>
                </div>
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