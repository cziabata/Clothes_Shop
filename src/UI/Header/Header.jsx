import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "./img/Main_Logo.png";
import CartLogo from "./img/Empty_Cart.png";
import Currency from "./img/Currency.png";

class Header extends React.Component {

    render() {
        return(
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
                   <img src={Logo} alt="Main Logo"/>
               </div>
               <div className={styles.headerCartBar}>
                   <div><img src={CartLogo} alt="Cart Logo"/></div>
                   <div><img src={Currency} alt="Currency Logo"/></div>
               </div>
            </header>
        )
    }
}
export default Header;
