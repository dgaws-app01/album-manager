import React from 'react';
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from '@reduxjs/toolkit';
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider, createSelectorHook, createDispatchHook } from 'react-redux';
import { titleCase } from '../../utils/text';

const createEmptyStore = () => {
  let newStore = configureStore({
    reducer: {},
    //middleware: (getDefaultMiddleware) => [...getDefaultMiddleware],
    preloadedState: {storeName : "masterStore"},    
  });
  
  newStore.loadedReducers = {};
  
  newStore.addSlice = (slice) => {
    let { name, reducer } = slice;
    newStore.loadedReducers[name] = reducer;
    newStore.replaceReducer(combineReducers(newStore.loadedReducers));
  };
  //let newStore = legacy_createStore(combineReducers({}))
  return newStore;
};
// Stores
export const stores = {
  master: createEmptyStore(),
};

stores.master.loadedReducers = {};

const $0 = (o, n) => {
  let name = Object.keys(o)[0];
  return { [n[0]]: name, [n[1]]: o[name] };
};

export const modifyStore = (props) => {
  const { storeName, store } = $0(props, ['storeName', 'store']);
  const retVal = {};
  //const store = props[storeName];
  if (storeName) {
    const {
      reducerName,
      reducer: { initialState, actions },
    } = $0(store, ['reducerName', 'reducer']);
    // const {
    //   [reducerName]: { initialState, actions },
    // } = store;

    const slice = createSlice({
      reducerName,
      initialState,
      reducers: {},
      extraReducers: (builder) => {
        Object.keys(actions).forEach((action) => {
          let actDef = actions[action];
          if (action.includes('*')) {
            let matcher = action.replace('*', '');
            let actNm = `is${titleCase(matcher)}`;
            let actMatcher = {
              [actNm]: (action) => {
                return action.type.includes(matcher);
              },
            };
            builder.addMatcher(actMatcher[actNm], actDef);
          } else {
            builder.addCase(createAction(action), actDef);
          }
        });
      },
    });

    const targetStore = (stores[storeName] =
      stores[storeName] || createEmptyStore());
    targetStore.addSlice(slice);

    console.log(slice);

    return {
      actions : slice.actions
    }
  }
};

const MasterProvider = (props) => {
  return <Provider store={stores.master}>{props.children}</Provider>;
};


export const store1Context = React.createContext();
export const store2Context = React.createContext();

const useStoreSel = createSelectorHook(store1Context)
const useMstrSel = createSelectorHook(store2Context)
const dspStor = createDispatchHook(store1Context)
//const dspMstr = createDispatchHook(store2Context)
export const setters = {
}

export function DispatcherCreator ({children}) {
  setters.dspStor2 = dspStor()  
  console.log({setters})
  return (<>{children}</>)
} 

export const hooks = {
  get mstr(){return useMstrSel((state)=> state)},
  get stor(){return useStoreSel((state)=> state)},
  set stor (v){ 
    //console.log(dspStor)
    //let dsp = dspStor()
    setters.dspStor2(v) 
  }
}


export default MasterProvider;

// Reducers
