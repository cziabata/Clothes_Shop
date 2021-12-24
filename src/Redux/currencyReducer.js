const ACTIVATE_CURRENCY = "currencyReducer/ACTIVATE_CURRENCY";
const DEACTIVATE_CURRENCY = "currencyReducer/DEACTIVATE_CURRENCY";

let initialState = {
    isActiveCurrency: false,
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
        default:
            return state
    }
}
export const activateCurrency = () => ({type: ACTIVATE_CURRENCY});
export const deactivateCurrency = () => ({type: DEACTIVATE_CURRENCY});