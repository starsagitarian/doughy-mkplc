import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './Styles/App.css';
import Main from './Components/Main'
import Navigation from './Components/Navigation'
import About from './Components/About';
import Detail from './Components/Detail';
import { Provider } from './Context/CartContext';
import Cart from './Components/Cart';
import Landing from "./Components/Landing"


 
function App() {

  return (
    
    <BrowserRouter>
        <div className="App">
            <Provider>
                  <div className="Navigation">
                <Navigation />
              </div>
              <Switch>
              <Route exact path="/" component={Landing} /> 
              <Route exact path="/bakeries" component={Main} />    
              <Route exact path="/About" component={About} />
              <Route exact path="/Cart" component={Cart} />
              <Route exact path="/bakery/:id" component={Detail} />    
              </Switch>
              <div>
                  <footer className="Footer">Footer</footer>
              </div>
              </Provider>
        </div>
    </BrowserRouter>
    
  );
}


export default App;
