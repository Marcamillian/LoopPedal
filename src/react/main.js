import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

import Controls from './components/controls';
import RecordingBlock from './components/recording_block';

import { testAction } from './actions'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <h1> Soemthing </h1> 
      <Controls/>
    </div>  
  </Provider>  
, document.querySelector('.react-container'));