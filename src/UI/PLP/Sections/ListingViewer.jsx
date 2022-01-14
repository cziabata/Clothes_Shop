import React from "react";
import { NavLink } from "react-router-dom";
import { setProduct, clearImage } from "../../../Redux/productDescriptionReducer";
import { connect } from "react-redux";
import EmptyCart from "../../Images/Empty Cart.svg";
import styles from "../ProductListingPage.module.scss";

class ListingViewer extends React.Component {
    render() {
        return(
            <>
               <div>
                <h1>{this.props.data.category.name.toUpperCase()}</h1>
                <div className={styles.productsContainer}>
                    {this.props.data.category.products.map(product =>
                        <div className={styles.productWrapper} id={product.id} onClick={()=>{
                            this.props.clearImage()
                            this.props.setProduct(product)}}>
                            <NavLink to="product_description">
                            <div className={styles.productImage}>
                                <div>
                                    <img src={product.gallery[0]} alt="product_item"/>
                                </div>
                            </div>
                            <div>
                                <span className={styles.productName}>{product.name}</span>
                            </div>
                            <div>
                                <span className={styles.productPrice}>{product.prices.map(
                                    price=>{if(price.currency===this.props.currencyName){
                                        return <span id={price.currency}>{this.props.currentCurrency + price.amount}</span>
                                    } else{return ""}}
                                )}</span>
                            </div>
                            </NavLink>
                            <div className={styles.productCartWrap}>
                                <img src={EmptyCart} alt="cart_item" className={styles.productCart}/>
                            </div>
                        </div>
                    )}
                </div>
            </div> 
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        currentCurrency: state.currencyReducer.currentCurrency,
        currencyName: state.currencyReducer.name,
    }
}
export default connect(mapStateToProps, {setProduct, clearImage})(ListingViewer)
