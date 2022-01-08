import { createStore, combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { currencyReducer } from "./currencyReducer";
import { productDescriptionReducer } from "./productDescriptionReducer";

let rootReducer = combineReducers({cartReducer, currencyReducer, productDescriptionReducer});

export let store = createStore(rootReducer);
window.store = store;