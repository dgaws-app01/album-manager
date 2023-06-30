import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { titleCase } from '../../utils/text';

const createEmptyStore = () => {
  let newStore = configureStore({
    reducer: {},
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware,
    preloadedState: {storeName : "masterStore"},    
  });
  newStore.loadedReducers = {};
  /**
   * @param {Slice} slice
   */
  newStore.addSlice = (slice) => {
    let { name, reducer } = slice;
    newStore.loadedReducers[name] = reducer;
    newStore.replaceReducer(combineReducers(newStore.loadedReducers));
  };
  return newStore;
};
// Stores
const stores = {
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

export default MasterProvider;

// Reducers
