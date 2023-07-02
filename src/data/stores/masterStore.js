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
import {createAPI} from '../services/api.js'

const createEmptyStore = () => {
  let newStore = configureStore({    
     middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
     reducer: {},
    preloadedState: { storeName: 'masterStore' },
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
  let out = { [n[0]]: name, [n[1]]: o[name] };
  console.log(out);
  return out;
};

export const modifyStore = (props) => {
  const { storeName, store } = $0(props, ['storeName', 'store']);
  const retVal = {};
  //const store = props[storeName];

  if (storeName) {
    const {
      name,
      reducer: { initialState, actions },
    } = $0(store, ['name', 'reducer']);
    
    

    const slice = createSlice({
      name,
      initialState,
      reducers: actions,
      /*
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
            console.log({ where:"adding case to slice", action, actDef });
            builder.addCase(createAction(action), actDef);
          }
        });
      },*/
    });

    const targetStore = (stores[storeName] =
      stores[storeName] || createEmptyStore());
    targetStore.addSlice(slice);

    console.log({
      storeName,
      store,
      name,
      initialState,
      actions,
      acts: slice.actions,
      reds: slice.caseReducers,
    });

    return {
      actions: slice.actions,
    };
  }
};

let aaa = createAPI({q1 : {name:""}})

console.log(aaa)

export const store1Context = React.createContext();
export const store2Context = React.createContext();

const useStoreSel = createSelectorHook(store1Context);
const useMstrSel = createSelectorHook(store2Context);
const dspStor = createDispatchHook(store1Context);
const dspMstr = createDispatchHook(store2Context);
export const setters = {};

export function DispatcherCreator({ children }) {
  setters.dspStor2 = dspStor();
  setters.dspMstr2 = dspMstr();
  console.log({ setters });
  return <>{children}</>;
}

// Testing ...
export const mstrActs = modifyStore({
  master: {
    users: {
      initialState: { users: [{ id: 1, name: 'aaa' }] },
      actions: {
        addUser: (state, act) => {
          console.log({ where: "addUser dispatched !", state, act });
        },
      },
    },
  },
});

console.log(mstrActs)
//stores.master.dispatch(mstrActs.actions.addUser())

export const mstrDsp = stores.master.dispatch

const MasterProvider = (props) => {
  return <Provider store={stores.master}>{props.children}</Provider>;
};


export const hooks = {
  get mstr() {
    return useMstrSel((state) => state);
  },
  get stor() {
    return useStoreSel((state) => state);
  },
  set stor(v) {
    setters.dspStor2(v);
  },
  set mstr(v) {
    setters.dspMstr2(v);
  },
};

// export const hooks = {
//   get mstr(){return hooks_.mstr}, 
//   get stor(){return hooks_.stor},
//   set mstr(v){hooks_.mstr = v},
//   set stor(v){hooks_.stor = v}
// }

//export const hooks = {mstr, stor} = hooks_

export default MasterProvider;

// Reducers
