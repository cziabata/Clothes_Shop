import { bindActionCreators } from "redux"

const ACTIVATE_CART = "cartReducer/ACTIVATE_CART";
const DEACTIVATE_CART = "cartReducer/DEACTIVATE_CART";

let initialState = {
    isActiveCart: false
}
export let cartReducer = (state=initialState, ation) => {
    switch(bindActionCreators.type) {
        case ACTIVATE_CART:
            return {
                ...state,
                isActiveCart: true
            }
        case DEACTIVATE_CART:
            return {
                ...state,
                isActiveCart: false
            }
        default:
            return state
    }
}