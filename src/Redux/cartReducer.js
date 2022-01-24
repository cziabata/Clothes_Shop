const ACTIVATE_CART = "cartReducer/ACTIVATE_CART";
const DEACTIVATE_CART = "cartReducer/DEACTIVATE_CART";
const ADD_NEW_ITEM = "cartReducer/ADD_NEW_ITEM";
const ADD_SUM_ITEM = "cartReducer/ADD_SUM_ITEM";
const INCREASE_ITEM_AMOUNT = "cartReducer/INCREASE_ITEM_AMOUNT";

let initialState = {
    isActiveCart: false,
    cartItems: [],
    cartSum: []
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
        case ADD_SUM_ITEM:
            return {
                ...state,
                cartSum: [...state.cartSum, ...action.price]
            }
        case INCREASE_ITEM_AMOUNT:
            return {
                ...state,
                cartItems: state.cartItems.map(item=>item.productProperties.id === action.id
                                                        ? item.productAmount+1
                                                        : item
                )
            }
        default:
            return state
    }
}

export const activateCart = () => ({type:ACTIVATE_CART});
export const deactivateCart = () => ({type:DEACTIVATE_CART});
export const addInCart = (item) => ({type: ADD_NEW_ITEM, item});
export const addToSum = (price) => ({type: ADD_SUM_ITEM, price});
export const increaseItem = (id) => ({type: INCREASE_ITEM_AMOUNT, id})