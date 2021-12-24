import { createStore, combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { currencyReducer } from "./currencyReducer";

let rootReducer = combineReducers({cartReducer, currencyReducer});

export let store = createStore(rootReducer);