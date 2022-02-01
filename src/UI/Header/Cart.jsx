import React from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { deactivateCart, addToSum, increaseItem, decreaseItem} from "../../Redux/cartReducer";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class ModalCart extends React.Component {
    getSum = (previousValue, currentValue) => previousValue + currentValue;

    render() {
        console.log(this.props.cartItems)
        return(
            <div className={cn(styles.modal, {[styles.active]: this.props.isActiveCart})} 
                 onClick={this.props.deactivateCart}>
                <div className={styles.modalContent} onClick={e=>e.stopPropagation()}>
                    <h4>{`My Bag, ${this.props.cartItems.length} items`}</h4>
                
                    {this.props.cartItems.length>0 
                        ? this.props.cartItems.map(item=><div className={styles.cartContainer} id={item.productProperties.id}>
                            <div>
                                <div className={styles.cartItemName}>{item.productProperties.name}</div>
                                <div>{item.productProperties.prices.map(
                                    price=>{if(price.currency===this.props.currencyName){
                                        return <span id={price.currency} className={styles.cartItemPrice}>
                                                    {this.props.currentCurrency + price.amount}
                                               </span>
                                    } else {return ""}})}
                                </div>
                                <div>
                                    {
                                        item.productProperties.attributes.length > 0 
                                        ? item.productProperties.attributes.map(attribute =><div id={attribute.id}>
                                            <div className={styles.attrName}>{attribute.name}:</div>
                                            <div className={styles.attrWrapper}>
                                                {
                                                    attribute.type === "swatch"
                                                    ? attribute.items.map(item=><div id={item.id} 
                                                                                     style={{background:item.value}}
                                                                                     className={styles.colorAttr}/>)
                                                    : attribute.items.map(item=><div id={item.id} className={styles.itemAttr}><div>{item.value}</div></div>)
                                                }
                                            </div>
                                        </div>)
                                        : null
                                    }
                                </div>
                            </div>
                            <div className={styles.cartFlexContainer}>
                                <div className={styles.cartBtns}>
                                    <button className={styles.cartCounter}
                                            onClick={()=>{
                                                this.props.addToSum(item.productProperties.prices.map(price=>{if(price.currency===this.props.currencyName){
                                                    return  price.amount
                                                } else{return 0}}))
                                                this.props.increaseItem(item.productProperties.id, item.productAmount+1)
                                                debugger
                                            }}>
                                        +
                                    </button>
                                    <div>{item.productAmount}</div>
                                    <button className={styles.cartCounter}
                                            onClick={()=>{
                                                this.props.decreaseItem(item.productProperties.id, item.productAmount-1)
                                            }}>
                                        -
                                    </button>
                                </div>
                                <div className={styles.cartItemPhoto}>
                                    <img src={item.productProperties.gallery[0]} alt="Product in cart"/>
                                </div>
                            </div>
                        </div>)
                        : "CART IS EMPTY"
                    }
                   <div>{this.props.cartItems.length>0 && <div><div className={styles.totalPriceBlock}>
                        <div className={styles.total}>Total:</div>
                        <div className={styles.totalPrice}>{
                           this.props.cartSum.length > 0 &&
                           this.props.currentCurrency +
                           this.props.cartSum.reduce(this.getSum).toFixed(2)
                        }</div>
                       </div>
                       <div className={styles.cartBtnsWrap}>
                           <div>
                                <NavLink to="bag">
                                    <button className={styles.viewBagBtn}>
                                        VIEW BAG
                                    </button>
                               </NavLink>
                           </div>
                           <div>
                               <button className={styles.checkOutBtn}>CHEK OUT</button>
                           </div>
                       </div>
                       </div>}
                    </div>
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
        cartSum: state.cartReducer.cartSum,
    }
}
export const Cart = connect(mapStateToProps, {deactivateCart, addToSum, increaseItem, decreaseItem})(ModalCart)