import React from 'react';
import './app.css';
import ErrorBoundry from '../error-boundry';

const App = () => {
  return(
    <ErrorBoundry>
      <div>Helo App</div>
    </ErrorBoundry>
    
  );
}


export default App;