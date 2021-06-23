import userReducer from "./userReducer"
import daysReducer from "./daysReducer"
import { combineReducers } from "redux"


export const reducer = combineReducers({
    days: daysReducer,
    user: userReducer
  })