import React from "react";
import { graphql } from '@apollo/client/react/hoc';
import { compose } from "redux";
import { connect } from "react-redux";
import { AllData } from "../../../Data_Access_Layer/Data_Access_Layer";
import styles from "../ProductListingPage.module.scss";
import ProductDescriptionPage from "../../PDP/ProductDescriptionPage";

class All extends React.Component {
    getData(){
        let data = this.props.data;
        if(data.loading){
            return(<div>Loading...</div>)
        } else {
            
            return(
            <div>
                <h1>ALL</h1>
                <div className={styles.productsContainer}>
                    {data.category.products.map(product =>
                        <div>
                            <div className={styles.productImage}>
                                <img src={product.gallery[0]} alt="product_item"/>
                            </div>
                            <div>
                                <span>{product.name}</span>
                            </div>
                            <div>
                                <span>{product.prices[0].amount}</span>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <span dangerouslySetInnerHTML={{__html:data.category.products[1].description}} />
                </div>
            </div>)
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
const mapStateToProps = (state) => {
    return {
        currentCurrency: state.currencyReducer.currentCurrency,
    }
}
export default compose(graphql(AllData), connect(mapStateToProps, null))(All)