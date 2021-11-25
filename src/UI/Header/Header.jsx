import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "./img/Main_Logo.png";

class Header extends React.Component {

    render() {
        return(
            <header className={styles.header}>
               <div className={styles.headerNavbar}>
                    <div>
                        <NavLink to="woman">Woman</NavLink>
                    </div>
                    <div>
                        <NavLink to="men">Men</NavLink>
                    </div>
                    <div>
                        <NavLink to="kids">Kids</NavLink>
                    </div>
               </div>
               <div>
                   <img src={Logo} alt="Main Logo"/>
               </div>
            </header>
        )
    }
}
export default Header;
