import React from 'react';
import './app.css';
import { withBookstoreService } from '../hoc';
import ErrorBoundry from '../error-boundry';

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  
  return(
      <ErrorBoundry>
        <div>Helo App</div>
      </ErrorBoundry>
  );
}


export default withBookstoreService()(App);