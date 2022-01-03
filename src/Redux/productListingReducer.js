const SET_PRODUCTS = "productListingReducer/SET_PRODUCTS";
let initialState = {
    products: []
}
export let productListingReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const setProducts = (products) => ({type: SET_PRODUCTS, products});
