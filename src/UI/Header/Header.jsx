import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "./img/Main_Logo.png";
import CartLogo from "./img/Empty_Cart.png";

class Header extends React.Component {
    state = {
        editeMode: false
    }
    activateEditeMode() {
        this.setState({
            editeMode: true
        })
    }
    deactivateEditeMode() {
        this.setState({
            editeMode: false
        })
    }
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
                   <div className={styles.cartWrapper} onClick={this.activateEditeMode.bind(this)}>
                       <img src={CartLogo} alt="Cart Logo"/>
                       <span className={styles.cartBadge}>1</span>
                   </div>
               </div>
            </header>
            </>
        )
    }
}
export default Header;
