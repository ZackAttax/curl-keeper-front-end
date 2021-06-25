import userReducer from "./userReducer"
import daysReducer from "./daysReducer"
import { combineReducers } from "redux"
import usersReducer from './usersReducer'

export const reducer = combineReducers({
    days: daysReducer,
    user: userReducer,
    users: usersReducer
  })