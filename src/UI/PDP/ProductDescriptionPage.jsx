import React from "react";
import { connect } from "react-redux";
import { setImage } from "../../Redux/productDescriptionReducer";
import styles from "./ProductDescriptionPage.module.scss";

class ProductDescriptionPage extends React.Component {
    render() {
        if(!this.props.product) {
            return <div>Loading...</div>
        }
        let product = this.props.product;
        return(
            <>
               <div className={styles.productContainer}>
                   <div className={styles.productSlider}>
                        {product.gallery.map(image => 
                            <div className={styles.sliderItem} id={Date.now()}>
                                <img src={image} alt="product" onClick={()=>{this.props.setImage(image)}}/>
                            </div>
                            )
                        }
                   </div>
                   <div className={styles.productImage}>
                        <img src={this.props.selectedImage ? this.props.selectedImage : product.gallery[0]} alt="product"/>
                   </div>
                   <div className={styles.productInfo}>

                   </div>
               </div>
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        product: state.productDescriptionReducer.product,
        selectedImage: state.productDescriptionReducer.selectedImage,
    }
}
export default  connect(
    mapStateToProps, {setImage}  
)(ProductDescriptionPage);