import { createStore, combineReducers, compose } from "redux";
import { cartReducer } from "./cartReducer";
import { currencyReducer } from "./currencyReducer";
import { productDescriptionReducer } from "./productDescriptionReducer";

let rootReducer = combineReducers({cartReducer, currencyReducer, productDescriptionReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store = createStore(rootReducer, composeEnhancers());
window.store = store;