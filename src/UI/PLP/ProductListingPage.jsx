import React from "react";
import { Route } from "react-router-dom";
import { All } from "./Sections/All";
import { Tech } from "./Sections/Tech";
import { Clothes } from "./Sections/Clothes";
import styles from "./ProductListingPage.module.scss"
export class ProductListingPage extends React.Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div>
                    <Route path="/woman" component={All}/>
                    <Route path="/men" component={Tech}/>
                    <Route path="/kids" component={Clothes}/>
                </div>
            </div>
        )
    }
}