import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Styles/App.css';
import Main from './Components/Main'
import Navigation from './Components/Navigation'
import About from './Components/About';
import Detail from './Components/Detail';
import { Provider } from './Context/CartContext';
import Cart from './Components/Cart';
import LocationContext from './Context/LocationContext';
import Bakery from './Components/Bakery'
import Map from './Components/Map/Map';
import  {PickupOrDelivery}  from './Context/PickupOrDelivery';



 
function App() {
  return (
    <>
    <Provider>
    <BrowserRouter>
     <PickupOrDelivery>
    <LocationContext >
     
        <div className="App">
                  <div className="Navigation">
                <Navigation />
              </div>
              <Switch>
              <Route exact path="/" component={Main} /> 
              <Route exact path="/Bakeries" component={Bakery} />    
              <Route exact path="/About" component={About} />
              <Route exact path="/Cart" component={Cart} />
              <Route exact path="/bakery/:id" component={Detail} />   
              <Route exact path="/Map" component={Map} />   
              </Switch>
              <div>
                  <footer className="Footer">Footer</footer>
              </div>     
        </div>
        </LocationContext>
        </PickupOrDelivery>
    </BrowserRouter>
    </Provider>
    </>
  );
}


export default App;
