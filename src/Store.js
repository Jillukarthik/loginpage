import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./feature/postSlice/postSlice";


export  const store=configureStore({
    reducer:{
   post:getDataReducer,
}})