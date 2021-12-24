import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { activateCart, deactivateCart } from "../../Redux/cartReducer";
import { activateCurrency, deactivateCurrency } from "../../Redux/currencyReducer";
import styles from "./Header.module.scss";
import Logo from "./img/Main_Logo.png";
import CartLogo from "./img/Empty_Cart.png";
import cn from "classnames";

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
const Cart = connect(mapStateToProps, {deactivateCart})(ModalCart)

class CurrencyBar extends React.Component {
    render() {
        return(
            <>
                <div className={cn(styles.currency_wrapper, {[styles.active]: this.props.isActiveCurrency})} 
                 onClick={this.props.deactivateCurrency}
                >
                     <div className={styles.currency_content} onClick={e=>e.stopPropagation()}>
                        2
                     </div>
                </div>
            </>
        )
    }
}
const mapStateToProps1 = (state) => {
    return {
        isActiveCurrency: state.currencyReducer.isActiveCurrency
    }
}
const Currency = connect(mapStateToProps1, {deactivateCurrency})(CurrencyBar)

class Header extends React.Component {
    debugger
    render() {
        return(
            <>
            <header className={styles.header}>
               <div className={styles.headerNavbar}>
                    <div className={styles.navbarItem}>
                        <NavLink to="woman">ALL</NavLink>
                    </div>
                    <div className={styles.navbarItem}>
                        <NavLink to="men">TECH</NavLink>
                    </div>
                    <div className={styles.navbarItem}>
                        <NavLink to="kids">CLOTHES</NavLink>
                    </div>
               </div>
               <div>
                   <NavLink to="index.html"><img src={Logo} alt="Main Logo" className={styles.mainLogo}/></NavLink>
               </div>
               <div className={styles.headerCartBar}>
                   <div onClick={this.props.activateCurrency}>
                       <span className={styles.currency}>$</span>
                   </div>
                   <div className={styles.cartWrapper} onClick={this.props.activateCart}>
                       <img src={CartLogo} alt="Cart Logo"/>
                       <span className={styles.cartBadge}>1</span>
                   </div>
               </div>
               <Currency />
               <Cart />
               
            </header>
            </>
        )
    }
}
export default connect(mapStateToProps, {activateCart, activateCurrency})(Header);
