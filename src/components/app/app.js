import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';
import ShoppingCartTable from '../shopping-cart-table';
import './app.css';


const App = ({ bookstoreService }) => {
  // console.log(bookstoreService.getBooks());
  
  return(
    <main role="main" className="container">
      <ShopHeader numItems={6} total={234} />
      <Switch>
        <Route
          path='/' 
          component={HomePage} 
          exact
          />
        <Route
          path='/cart' 
          component={CartPage} 
          />
      </Switch>
        <ShoppingCartTable/>
    </main>
  );
}


export default App;