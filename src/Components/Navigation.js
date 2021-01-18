import React, {useContext, useState} from 'react';
import { AppContext } from '../Context/CartContext'
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';


function Navigation ({data}) {
  const [cart, _] = useContext(AppContext);
  

  return (
    <>
    <div className='nav-wrapper-1'>
      <nav id='menu'>
    <div className='nav-inner'>
        <div>
          <ul> 
              <li className="home-icon"><Link to="/"><HomeIcon fontSize="medium"></HomeIcon></Link></li>
          </ul>
        </div>
          <div className="nav-right">
              <ul>
                <li className='top-lef-link'><Link to="/About">Sign In</Link></li>
                <li className='top-right-link'><Link to="/Cart">Cart: Items {cart.length}</Link></li>
              </ul>
          </div>
    </div>
    </nav>
    </div>
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