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
export const modifyStore = (props) => {  
  const storeName = Object.keys(props)[0]
  const store = props[storeName]
  if(storeName){
    const name = Object.keys(store)[0]
    const {[name]: {initialState, actions}} = props
    const slice = createSlice({
      name, 
      initialState, 
      reducers : {},
      extraReducers : (builder) => {
        Object.keys(actions).forEach(action => {
          if(action.includes("*")){
            let matcher = action.replace("*", "")
            let actNm = `is${titleCase(matcher)}`
            let actMatcher = {
              [actNm] : (action) => {
                return action.type.includes(matcher)
              }
            }
            let actDef = actions[action]
            builder.addMatcher(actMatcher[actNm], actDef)
          }
          else{
            let actDef = actions[action]
            builder.addCase(createAction(action), actDef)
          }
        })
      }
    })

    console.log(slice)

  } 

  
  
  

}

// Reducers



