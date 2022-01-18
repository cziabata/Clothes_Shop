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
                        ? this.props.cartItems.map(item=><div>
                            <div>
                                <div>{item.name}</div>
                                <div>{item.prices[0].amount}</div>
                                <div>
                                    {item.attributes.map(attribute=><span>{attribute.name}</span>)}
                                </div>
                            </div>
                            <div>
                                <button>+</button>
                                <div>1</div>
                                <button>-</button>
                            </div>
                            <div>
                                <img src="" alt="Product in cart"/>
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
        cartItems: state.cartReducer.cartItems
    }
}
export const Cart = connect(mapStateToProps, {deactivateCart})(ModalCart)