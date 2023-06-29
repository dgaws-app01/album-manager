import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit'
import thunk from "redux-thunk"

import {  } from 'redux';

// Stores 
const stores = []
export const defineStore = (props) => {
  const name = [Object.keys(props)[0]]
  if(name){
    const {[Object.keys(props)[0]]: {initialState, actions}} = props
    
  } 
  
  

}

// Reducers



