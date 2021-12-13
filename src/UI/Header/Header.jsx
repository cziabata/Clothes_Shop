import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { activateCart, deactivateCart } from "../../Redux/cartReducer";
import styles from "./Header.module.scss";
import Logo from "./img/Main_Logo.png";
import CartLogo from "./img/Empty_Cart.png";
import cn from "classnames";

class Modal extends React.Component {
    render() {
        return(
            
            <div className={cn(styles.modal, {[styles.active]: this.props.isActiveCart})}>
                <div className={styles.modalContent}>
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
const Cart = connect(mapStateToProps, null)(Modal)

class Header extends React.Component {
    render() {
        return(
            <>
            <header className={styles.header}>
               <div className={styles.headerNavbar}>
                    <div className={styles.navbarItem}>
                        <NavLink to="woman">WOMAN</NavLink>
                    </div>
                    <div className={styles.navbarItem}>
                        <NavLink to="men">MEN</NavLink>
                    </div>
                    <div className={styles.navbarItem}>
                        <NavLink to="kids">KIDS</NavLink>
                    </div>
               </div>
               <div>
                   <NavLink to="index.html"><img src={Logo} alt="Main Logo" className={styles.mainLogo}/></NavLink>
               </div>
               <div className={styles.headerCartBar}>
                   <div>
                       <span className={styles.currency}>$</span>
                   </div>
                   <div className={styles.cartWrapper} onClick={this.props.activateCart}>
                       <img src={CartLogo} alt="Cart Logo"/>
                       <span className={styles.cartBadge}>1</span>
                   </div>
               </div>
               <Cart />
            </header>
            </>
        )
    }
}
export default connect(mapStateToProps, {activateCart, deactivateCart})(Header);
