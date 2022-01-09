import React from "react";
import { graphql } from '@apollo/client/react/hoc';
import { compose } from "redux";
import { connect } from "react-redux";
import { AllData } from "../../../Data_Access_Layer/Data_Access_Layer";
import { setProduct, clearImage } from "../../../Redux/productDescriptionReducer";
import { NavLink } from "react-router-dom";
import EmptyCart from "../../Images/Empty Cart.svg";
import styles from "../ProductListingPage.module.scss";

class All extends React.Component {
    getData(){
        let data = this.props.data;
        if(data.loading){
            return(<div>Loading...</div>)
        } else {
            return(
            <div>
                <h1>ALL</h1>
                <div className={styles.productsContainer}>
                    {data.category.products.map(product =>
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
                <div>
                    <span dangerouslySetInnerHTML={{__html:data.category.products[1].description}} />
                </div>
            </div>)
        }
    }
    render() {
        return(
            <>
               {this.getData()} 
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
export default compose(graphql(AllData), connect(mapStateToProps, {setProduct, clearImage}))(All)