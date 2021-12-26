const ACTIVATE_CURRENCY = "currencyReducer/ACTIVATE_CURRENCY";
const DEACTIVATE_CURRENCY = "currencyReducer/DEACTIVATE_CURRENCY";
const SET_USD = "currencyReducer/SET_USD";
const SET_EUR = "currencyReducer/SET_EUR";
const SET_JPY = "currencyReducer/SET_JPY";

let initialState = {
    isActiveCurrency: false,
    currentCurrency: "$",
}
export let currencyReducer = (state=initialState, action) => {
    switch(action.type) {
        case ACTIVATE_CURRENCY:
            return {
                ...state,
                isActiveCurrency: true
            }
        case DEACTIVATE_CURRENCY:
            return {
                ...state,
                isActiveCurrency: false
            }
        case SET_USD:
            return {
                ...state,
                currentCurrency: "$"
            }
        case SET_EUR:
            return {
                ...state,
                currentCurrency: "€"
            }
        case SET_JPY:
            return {
                ...state,
                currentCurrency: "¥"
            }
        default:
            return state
    }
}
export const activateCurrency = () => ({type: ACTIVATE_CURRENCY});
export const deactivateCurrency = () => ({type: DEACTIVATE_CURRENCY});
export const setUSD = () => ({type: SET_USD});
export const setEUR = () => ({type: SET_EUR});
export const setJPY = () => ({type: SET_JPY});
