import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { activateCart } from "../../Redux/cartReducer";
import { activateCurrency } from "../../Redux/currencyReducer";
import styles from "./Header.module.scss";
import Logo from "./img/Main_Logo.png";
import CartLogo from "./img/Empty_Cart.png";
import { Currency } from "./Currency";
import { Cart } from "./Cart";

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
                   <div>
                       <span className={styles.currency} onClick={this.props.activateCurrency}>{this.props.currentCurrency}</span>
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
let mapStateToProps = (state) => {
    return {
        currentCurrency: state.currencyReducer.currentCurrency,
    }
}
export default connect(mapStateToProps, {activateCart, activateCurrency})(Header);
