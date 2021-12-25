import React from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { deactivateCart } from "../../Redux/cartReducer";
import { connect } from "react-redux";

class ModalCart extends React.Component {
    render() {
        return(
            
            <div className={cn(styles.modal, {[styles.active]: this.props.isActiveCart})} 
                 onClick={this.props.deactivateCart}
            >
                <div className={styles.modalContent} onClick={e=>e.stopPropagation()}>
                    1
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isActiveCart: state.cartReducer.isActiveCart
    }
}
export const Cart = connect(mapStateToProps, {deactivateCart})(ModalCart)