import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import store from "./store.js"
import {stores, store1Context, store2Context, DispatcherCreator, setters} from "./data/stores/masterStore.js"

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const {master} = stores

console.log({master})



root.render( 
<Provider store={store} context={store1Context}>
  <Provider store={master} context={store2Context}>    
    <DispatcherCreator>
      <App />
    </DispatcherCreator>
  </Provider>
  </Provider>

 );


