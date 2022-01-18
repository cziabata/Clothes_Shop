import React from "react";
import { NavLink } from "react-router-dom";
import { setProduct, clearImage } from "../../../Redux/productDescriptionReducer";
import { addInCart } from "../../../Redux/cartReducer";
import { connect } from "react-redux";
import EmptyCart from "../../Images/Empty Cart.svg";
import styles from "../ProductListingPage.module.scss";
import cn from "classnames";

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
                            <NavLink to="product_description" onClick={(e)=>{!product.inStock && e.preventDefault()}}>
                                <div className={cn(styles.productFlexWrapper,{[styles.outOfStockStyles]: !product.inStock})}> 
                                    <div className={styles.productImage}>
                                        <img src={product.gallery[0]} alt="product_item" />
                                        {!product.inStock && <span className={styles.outOfStockSpan}>OUT OF STOCK</span>}
                                        <div className={cn({[styles.outOfStockBlur]: !product.inStock})}></div>
                                    </div>
                                    <div className={styles.heightEquilizer}></div>
                                    <div >
                                        <span className={styles.productName}>{product.name}</span>
                                    </div>
                                    <div className={styles.productPriceWrap}>
                                        <span className={styles.productPrice}>{product.prices.map(
                                            price=>{if(price.currency===this.props.currencyName){
                                                return <span id={price.currency}>{this.props.currentCurrency + price.amount}</span>
                                            } else{return ""}})}
                                        </span>
                                    </div>
                                </div>
                            </NavLink>
                            <div className={cn(styles.productCartWrap, {[styles.displayNone]: !product.inStock})}
                                 onClick={()=>{this.props.addInCart(product)}}>
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
export default connect(mapStateToProps, {setProduct, clearImage, addInCart})(ListingViewer)