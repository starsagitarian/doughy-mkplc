import React, {useContext, useState} from 'react';
import { AppContext } from '../Context/CartContext'
import { Link, NavLink } from 'react-router-dom';



function Navigation ({data}) {
  const [cart, setCart, myFunction] = useContext(AppContext);
  
  
 
  return (
    <>
      <nav id='menu'>
        <ul> 
             <li><Link to="/">Home</Link></li>
            <li><Link to="/Bakeries">Bakeries</Link></li>
            <li className='top-lef-link'><Link to="/About">Sign In</Link></li>
            <li className='top-right-link'><Link to="/Cart">Cart: Items {cart.length}:Total {myFunction(cart)}</Link></li>
          </ul>
    </nav>
  </>
)};

export default Navigation;
// const [clicked, setClicked] = useState('Home');


// function handleClick (e) {
//   setClicked(e.target.name);
//   console.log('event', e.target.name);
  
// }

// console.log('clicked', clicked);

// return (
//   <>
//   <nav>
//       <button onClick={handleClick} name='Home'>Home</button>
//       <button onClick = {handleClick} name= 'About'>About Us</button>
//   </nav>

//   {clicked === 'Home'? <Main data={data}/>:<About />}
//   </>
//   )