import React from "react";
import styles from "./Header.module.scss";
import { graphql } from '@apollo/client/react/hoc';
import {gql} from "@apollo/client";

class Header extends React.Component {
    getData(){
        var data = this.props.data;
        if(data.loading) {
            return(<div>Loading...</div>)
        } else {
            return(
                <div>
                    <div>{data.categories[0].name}</div>
                </div>
            )
        }
    }
    render() {
        return(
            <header className={styles.header}>
                {this.getData()}
            </header>
        )
    }
}
export default graphql(gql`
query{
  categories{name, products{description, brand, inStock, gallery ,category,prices{currency, amount}, attributes{items{displayValue}}}}
}
`)(Header);
