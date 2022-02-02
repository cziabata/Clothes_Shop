const ACTIVATE_CART = "cartReducer/ACTIVATE_CART";
const DEACTIVATE_CART = "cartReducer/DEACTIVATE_CART";
const ADD_NEW_ITEM = "cartReducer/ADD_NEW_ITEM";
const ADD_SUM_ITEM = "cartReducer/ADD_SUM_ITEM";
const CLEAR_CART_SUM = "cartReducer/CLEAR_CART_SUM";
const INCREASE_ITEM_AMOUNT = "cartReducer/INCREASE_ITEM_AMOUNT";
const DECREASE_ITEM_AMOUNT = "cartReducer/DECREASE_ITEM_AMOUNT";

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
            debugger
            return {
                ...state,
                cartSum: [...state.cartSum, ...action.price]
            }
        case CLEAR_CART_SUM:
            return {
                ...state,
                cartSum: []
            }
        case INCREASE_ITEM_AMOUNT:
            return {
                ...state,
                cartItems: [...state.cartItems.map(item=>{if(item.productProperties.id === action.id) {
                    return {...item, productProperties: item.productProperties, productAmount: action.amount}
                } return item })]
            }
        case DECREASE_ITEM_AMOUNT:
            return {
                ...state,
                cartItems: [...state.cartItems.map(item=>{if(item.productProperties.id === action.id && item.productAmount !== 1){
                    return {...item, productProperties: item.productProperties, productAmount: action.amount}
                } return item })]
            }
        default:
            return state
    }
}

export const activateCart = () => ({type:ACTIVATE_CART});
export const deactivateCart = () => ({type:DEACTIVATE_CART});
export const addInCart = (item) => ({type: ADD_NEW_ITEM, item});
export const addToSum = (price) => ({type: ADD_SUM_ITEM, price});
export const clearCartSum = () => ({type: CLEAR_CART_SUM});
export const increaseItem = (id, amount) => ({type: INCREASE_ITEM_AMOUNT, id, amount});
export const decreaseItem = (id, amount) => ({type: DECREASE_ITEM_AMOUNT, id, amount});