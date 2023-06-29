import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit'
import thunk from "redux-thunk"

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



