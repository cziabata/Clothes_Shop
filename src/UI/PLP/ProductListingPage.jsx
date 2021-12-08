import React from "react";
import { Route } from "react-router-dom";
import { Kids } from "./Sections/Kids";
import { Men } from "./Sections/Men";
import { Woman } from "./Sections/Woman";
import styles from "./ProductListingPage.module.scss"
export class ProductListingPage extends React.Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div>
                    <Route path="/woman" component={Woman}/>
                    <Route path="/men" component={Men}/>
                    <Route path="/kids" component={Kids}/>
                </div>
            </div>
        )
    }
}