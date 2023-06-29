import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import {} from "../../utils/text"

import {  } from 'redux';

// Stores 
const stores = []
export const defineStore = (props) => {
  const name = Object.keys(props)[0]
  if(name){
    const {[name]: {initialState, actions}} = props
    const slice = createSlice({
      name, 
      initialState, 
      reducers : {},
      extraReducers : (builder) => {
        Object.keys(actions).forEach(action => {
          if(action.includes("*")){
            let actNm = action.replace("*", "")
            let actDef = {
              [`actNm`] : (action) => {
                return action.type.includes(actNm)
              }
            }
            builder.addMatcher()
          }
          else{
            builder.addCase(createAction(action), actions[action])
          }
        })
      }
    })
  } 
  
  

}

// Reducers



