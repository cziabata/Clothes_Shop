import React from "react";
import { connect } from "react-redux";
import { setImage } from "../../Redux/productDescriptionReducer";
import { addInCart, addToSum, increaseItem } from "../../Redux/cartReducer";
import cn from "classnames";
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
                   <div>
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
                        <h2 className={styles.productName}>{product.name}</h2>
                        <h3 className={styles.productBrand}>{product.brand}</h3>
                        <div>
                            {product.attributes.length > 0 
                                ? product.attributes.map(attribute => <div id={attribute.name}>
                                    <div className={styles.attrName}>{attribute.name}:</div>
                                    <div className={styles.attributesWrapper}>
                                        {
                                            attribute.type === "swatch"
                                                ? attribute.items.map(item => <div id={item.id} 
                                                                                   className={cn(styles.attrPick, styles.swatchHover)} 
                                                                                   style={{background: item.value}}/>)
                                                : attribute.items.map(item => <div id={item.id} className={cn(styles.attrPick, styles.attrCenter, styles.attrHover, styles.swatchHover)}>
                                                                                <div>{item.value}</div>
                                                                              </div>)
                                        }
                                    </div>
                                    </div>)
                                : null
                            }
                        </div>
                        <div>
                            <div className={styles.attrName}>Price:</div>
                            <div>{product.prices.map(price => {if(price.currency===this.props.currencyName){
                                        return <span id={price.currency} className={styles.price}>{this.props.currentCurrency + price.amount}</span>
                                    } else{return ""}})}</div>
                        </div>
                        <div>
                            <button onClick={()=>{
                                if(this.props.cartItems.length>0){
                                    const exist = this.props.cartItems.find(x=> x.productProperties.id === product.id)
                                    if(exist){
                                        this.props.increaseItem(product.id)
                                        this.props.addToSum(product.prices.map(price=>{if(price.currency===this.props.currencyName){
                                            return  price.amount
                                        } else{return 0}}))
                                    }
                                    const checkingIdArr = this.props.cartItems.map(checkItem=>checkItem.productProperties.id)
                                    const isExistId = checkingIdArr.find(x=> x === product.id)
                                    if(!isExistId) {
                                        this.props.addInCart(Object.create({}, {
                                            productProperties: {value: product},
                                            productAmount: {value:1}
                                        }))
                                        this.props.addToSum(product.prices.map(price=>{if(price.currency===this.props.currencyName){
                                            return  price.amount
                                        } else{return 0}}))
                                    }
                                 }
                                 if(this.props.cartItems.length===0){
                                    this.props.addInCart(Object.create({}, {
                                        productProperties: {value: product},
                                        productAmount: {value:1}
                                    }))
                                    this.props.addToSum(product.prices.map(price=>{if(price.currency===this.props.currencyName){
                                        return  price.amount
                                    } else{return 0}}))
                                 }
                            }} 
                                    className={cn(styles.button, styles.swatchHover)}>
                                        ADD TO CART
                            </button>
                        </div>
                        <div dangerouslySetInnerHTML={{__html:product.description}} />
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
        currentCurrency: state.currencyReducer.currentCurrency,
        currencyName: state.currencyReducer.name,
        cartItems: state.cartReducer.cartItems,
    }
}
export default  connect(
    mapStateToProps, {setImage, addInCart, addToSum, increaseItem}  
)(ProductDescriptionPage);