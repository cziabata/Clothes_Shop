import React from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { deactivateCart } from "../../Redux/cartReducer";
import { connect } from "react-redux";

class ModalCart extends React.Component {
    render() {
        return(
            
            <div className={cn(styles.modal, {[styles.active]: this.props.isActiveCart})} 
                 onClick={this.props.deactivateCart}>
                <div className={styles.modalContent} onClick={e=>e.stopPropagation()}>
                    <h4>{`My Bag, ${this.props.cartItems.length} items`}</h4>
                    {this.props.cartItems.length>0 
                        ? this.props.cartItems.map(item=><div className={styles.cartContainer} id={item.id}>
                            <div>
                                <div>{item.name}</div>
                                <div>{item.prices.map(
                                    price=>{if(price.currency===this.props.currencyName){
                                        return <span id={price.currency}>{this.props.currentCurrency + price.amount}</span>
                                    } else {return ""}})}
                                </div>
                                <div>
                                    {
                                        item.attributes.length > 0 
                                        ? item.attributes.map(attribute =><div id={attribute.id}>
                                            <div>{attribute.name}:</div>
                                            <div className={styles.attrWrapper}>
                                                {
                                                    attribute.type === "swatch"
                                                    ? attribute.items.map(item=><div id={item.id} 
                                                                                     style={{background:item.value}}
                                                                                     className={styles.colorAttr}/>)
                                                    : attribute.items.map(item=><div id={item.id}>{item.value}</div>)
                                                }
                                            </div>
                                        </div>)
                                        : null
                                    }
                                </div>
                            </div>
                            <div className={styles.cartFlexContainer}>
                                <div className={styles.cartBtns}>
                                    <button className={styles.cartCounter}>+</button>
                                    <div>1</div>
                                    <button className={styles.cartCounter}>-</button>
                                </div>
                                <div className={styles.cartItemPhoto}>
                                    <img src={item.gallery[0]} alt="Product in cart"/>
                                </div>
                            </div>
                        </div>)
                        : "CART IS EMPTY"
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isActiveCart: state.cartReducer.isActiveCart,
        cartItems: state.cartReducer.cartItems,
        currentCurrency: state.currencyReducer.currentCurrency,
        currencyName: state.currencyReducer.name,
    }
}
export const Cart = connect(mapStateToProps, {deactivateCart})(ModalCart)