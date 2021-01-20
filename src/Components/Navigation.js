/* eslint-disable */

import React, {useContext} from 'react';
import { AppContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Navigation () {
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
        <div className="doughy-logo"> <h1>Doughy</h1></div>
          <div className="nav-right">
              <ul>
                <li className='top-right-link'><Link to="/Cart"><ShoppingCartOutlinedIcon/>{cart.length}</Link></li>
                <li className='top-lef-link'><Link to="/About">Sign In</Link></li>
              </ul>
          </div>
    </div>
    </nav>
    </div>
  </>
)}

export default Navigation;
