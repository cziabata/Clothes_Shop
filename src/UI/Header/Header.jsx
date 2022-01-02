import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { graphql } from '@apollo/client/react/hoc';
import { compose } from "redux";
import { activateCart } from "../../Redux/cartReducer";
import { activateCurrency } from "../../Redux/currencyReducer";
import styles from "./Header.module.scss";
import Logo from "./img/Main_Logo.png";
import CartLogo from "./img/Empty_Cart.png";
import { Currency } from "./Currency";
import { Cart } from "./Cart";
import { GetCategories } from "../../Data_Access_Layer/Data_Access_Layer";
import cn from "classnames";

class Header extends React.Component {
    getData() {
        let data = this.props.data;
        if (data.loading) {
            return <div>Loading...</div>
        } else  {
            return(
                <header className={styles.header}>
                <div className={styles.headerNavbar}>
                     <div className={styles.navbarItem}>
                         <NavLink to="all">ALL</NavLink>
                     </div>
                     <div className={styles.navbarItem}>
                         <NavLink to="tech">{data.categories[1].name.toUpperCase()}</NavLink>
                     </div>
                     <div className={styles.navbarItem}>
                         <NavLink to="clothes">{data.categories[0].name.toUpperCase()}</NavLink>
                     </div>
                </div>
                <div>
                    <NavLink to="index.html"><img src={Logo} alt="Main Logo" className={styles.mainLogo}/></NavLink>
                </div>
                <div className={styles.headerCartBar}>
                    <div>
                        <span className={cn(styles.currency, {[styles.activeCurrency]: this.props.isActiveCurrency})} 
                              onClick={this.props.activateCurrency}>
                                  {this.props.currentCurrency}
                        </span>
                    </div>
                    <div className={styles.cartWrapper} onClick={this.props.activateCart}>
                        <img src={CartLogo} alt="Cart Logo"/>
                        <span className={styles.cartBadge}>1</span>
                    </div>
                </div>
                <Currency />
                <Cart />
             </header>
            )
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
let mapStateToProps = (state) => {
    return {
        currentCurrency: state.currencyReducer.currentCurrency,
        isActiveCurrency: state.currencyReducer.isActiveCurrency,
    }
}
export default compose (graphql(GetCategories), connect(mapStateToProps, {activateCart, activateCurrency}))(Header);
