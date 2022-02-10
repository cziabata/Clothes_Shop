import React from "react";
import { Route } from "react-router-dom";
import All from "./Sections/All";
import Tech from "./Sections/Tech";
import Clothes from "./Sections/Clothes";
import ProductDescriptionPage from "../PDP/ProductDescriptionPage";
import Bag from "../Bag/Bag";
import styles from "./ProductListingPage.module.scss";

export class ProductListingPage extends React.Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div>
                    <Route path="/all" component={All}/>
                    <Route path="/tech" component={Tech}/>
                    <Route path="/clothes" component={Clothes}/>
                    <Route path="/product_description" component={ProductDescriptionPage}/>
                    <Route path="/bag" component={Bag}/>
                </div>
            </div>
        )
    }
}