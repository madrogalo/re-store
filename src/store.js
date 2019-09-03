import { createStore } from 'redux';

import reducer from './reducers';

const logMiddleware = (store) => (dispatch) => (action) => {
  console.log(action.type);
  return dispatch(action)
};

const enhancer = (createStore) => (...args) => {
  const store = createStore(...args)
  const originalDispatch = store.dispatch;
  store.dispatch = ( action ) => {
    if (typeof action === 'string') {
     return originalDispatch({
        type: action
      });
    }
  
    return originalDispatch(action);
  };
  return store;
};

const store = createStore(reducer, enhancer);

export default store;