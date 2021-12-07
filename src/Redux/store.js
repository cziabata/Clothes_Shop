import { createStore, combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

let rootReducer = combineReducers({cartReducer});

export let store = createStore(rootReducer)