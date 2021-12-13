const ACTIVATE_CART = "cartReducer/ACTIVATE_CART";
const DEACTIVATE_CART = "cartReducer/DEACTIVATE_CART";

let initialState = {
    isActiveCart: false
}
export let cartReducer = (state=initialState, action) => {
    switch(action.type) {
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

export const activateCart = () => ({type:ACTIVATE_CART});
export const deactivateCart = () => ({type:DEACTIVATE_CART});