const ACTIVATE_CART = "cartReducer/ACTIVATE_CART";
const DEACTIVATE_CART = "cartReducer/DEACTIVATE_CART";
const ADD_NEW_ITEM = "cartReducer/ADD_NEW_ITEM";

let initialState = {
    isActiveCart: false,
    cartItems: []
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
        case ADD_NEW_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.item]
            }
        default:
            return state
    }
}

export const activateCart = () => ({type:ACTIVATE_CART});
export const deactivateCart = () => ({type:DEACTIVATE_CART});
export const addInCart = (item) => ({type: ADD_NEW_ITEM, item})