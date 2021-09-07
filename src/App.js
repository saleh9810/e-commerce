import './App.scss';
import Navbar from './components/Navbar.js'
import Home from './pages'
import ProductDetails from './pages/ProductDetails'
import Basket from './pages/Basket'
import {BrowserRouter, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
       <Switch>
         <Route exact path="/">
             <Home />
         </Route>

         <Route exact path="/Basket">
          <Basket />
         </Route>

          <Route exact path="/product/:id">
            <ProductDetails />
          </Route>
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
