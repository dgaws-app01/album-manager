import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import {titleCase} from "../../utils/text"



// Stores 
const stores = {
  master : configureStore({
    reducer : {},
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware,
    preloadedState : {}
  })
}

const $0 = (o) => Object.keys(o)[0]

export const modifyStore = (props) => {  
  const storeName = $0(props) 
  const store = props[storeName] 
  if(storeName){
    const reducerName = $0(store) 
    const {[reducerName]: {initialState, actions}} = store
    
    const slice = createSlice({
      reducerName, 
      initialState, 
      reducers : {},
      extraReducers : (builder) => {
        Object.keys(actions).forEach(action => {
          let actDef = actions[action]
          if(action.includes("*")){
            let matcher = action.replace("*", "")
            let actNm = `is${titleCase(matcher)}`
            let actMatcher = {
              [actNm] : (action) => {
                return action.type.includes(matcher)
              }
            }            
            builder.addMatcher(actMatcher[actNm], actDef)
          }
          else{            
            builder.addCase(createAction(action), actDef)
          }
        })
      }
    })
    
    console.log(slice)

  } 
 

}



// Reducers



