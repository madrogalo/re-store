import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import './app.css';
import { withBookstoreService } from '../hoc';
import ErrorBoundry from '../error-boundry';

const App = ({ bookstoreService }) => {
  // console.log(bookstoreService.getBooks());
  
  return(
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
      // <ErrorBoundry>
        // <div>Helo App</div>
      // </ErrorBoundry>
  );
}


export default App;