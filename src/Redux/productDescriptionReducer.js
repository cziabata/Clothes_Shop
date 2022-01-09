const SET_PRODUCT = "productDescriptionReducer/SET_PRODUCT";
const SET_IMAGE = "productDescriptionReducer/SET_IMAGE";
const CLEAR_IMAGE  = "productDescriptionReducer/CLEAR_IMAGE";

let initialState = {
    product: null,
    selectedImage: null
}

export let productDescriptionReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product
            }
        case SET_IMAGE:
            return {
                ...state,
                selectedImage: action.image
            }
        case CLEAR_IMAGE:
            return {
                ...state,
                selectedImage: null
            }
        default:
            return state
    }
}
export let setProduct = (product) => ({type:SET_PRODUCT, product});
export let setImage = (image) => ({type:SET_IMAGE, image});
export let clearImage = () => ({type:CLEAR_IMAGE});