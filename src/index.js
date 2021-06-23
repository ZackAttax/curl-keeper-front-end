import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'

//redux
import { Provider } from 'react-redux'
//async action
import thunk from 'redux-thunk'

import { BrowserRouter as Router } from 'react-router-dom';
import { reducer } from './reducers/reducer'



const store = createStore(reducer, compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App/>
    </Router>
  </Provider>
  ,
 document.getElementById('root')
);
