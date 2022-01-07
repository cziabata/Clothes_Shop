const ACTIVATE_CURRENCY = "currencyReducer/ACTIVATE_CURRENCY";
const DEACTIVATE_CURRENCY = "currencyReducer/DEACTIVATE_CURRENCY";
const SET_USD = "currencyReducer/SET_USD";
const SET_GBP = "currencyReducer/SET_GBP";
const SET_JPY = "currencyReducer/SET_JPY";
const SET_AUD = "currencyReducer/SET_AUD";
const SET_RUB = "currencyReducer/SET_RUB";

let initialState = {
    isActiveCurrency: false,
    currentCurrency: "$",
    name: "USD"
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
                currentCurrency: "$",
                name: "USD"
            }
        case SET_GBP:
            return {
                ...state,
                currentCurrency: "£",
                name: "GBP"
            }
        case SET_JPY:
            return {
                ...state,
                currentCurrency: "¥",
                name: "JPY"
            }
        case SET_AUD:
            return {
                ...state,
                currentCurrency: "AU$",
                name: "AUD"
            }
        case SET_RUB:
            return {
                ...state,
                currentCurrency: "₽",
                name: "RUB"
            }
        default:
            return state
    }
}
export const activateCurrency = () => ({type: ACTIVATE_CURRENCY});
export const deactivateCurrency = () => ({type: DEACTIVATE_CURRENCY});
export const setUSD = () => ({type: SET_USD});
export const setGBP = () => ({type: SET_GBP});
export const setJPY = () => ({type: SET_JPY});
export const setAUD = () => ({type: SET_AUD});
export const setRUB = () => ({type: SET_RUB});
