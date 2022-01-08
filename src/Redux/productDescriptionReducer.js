const SET_PRODUCT = "productDescriptionReducer/SET_PRODUCT";

let initialState = {
    product: null
}

export let productDescriptionReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product
            }
        default:
            return state
    }
}
export let setProduct = (product) => ({type:SET_PRODUCT, product})