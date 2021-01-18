import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './Styles/App.css';
import Main from './Components/Main'
import Navigation from './Components/Navigation'
import About from './Components/About';
import Detail from './Components/Detail';
import { Provider } from './Context/CartContext';
import Cart from './Components/Cart';
import Landing from "./Components/Landing"
import LocationProvider from './Context/LocationContext';
import Bakery from './Components/Bakery'
import SearchLocation from './Components/SearchLocation';


 
function App() {

  return (
    <Provider>
    <BrowserRouter>
    <LocationProvider >
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
              </Switch>
              <div>
                  <footer className="Footer">Footer</footer>
              </div>
             
        </div>
        </LocationProvider>
    </BrowserRouter>
    </Provider>
    
  );
}


export default App;
