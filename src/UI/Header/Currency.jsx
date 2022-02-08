import React from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { connect } from "react-redux";
import { deactivateCurrency, setUSD, setGBP, setJPY, setAUD, setRUB } from "../../Redux/currencyReducer";
import { clearCartSum, addToSum } from "../../Redux/cartReducer";

class CurrencyBar extends React.Component {
    addInCartSum=(itemSum, productAmount)=>{
        while(productAmount){
            this.props.addToSum([itemSum])
            productAmount--
        }
    }
    render() {
        return(
            <>
                <div className={cn(styles.modal, {[styles.active]: this.props.isActiveCurrency})} 
                 onClick={this.props.deactivateCurrency}
                >
                     <div className={styles.currencyContent} onClick={e=>e.stopPropagation()}>
                        <div onClick={()=>
                            {this.props.setUSD()
                            this.props.clearCartSum()
                            this.props.cartItems.map(
                                product => product.productProperties.prices.map(
                                    item => item.currency === "USD" && this.addInCartSum(item.amount,product.productAmount)))
                        }
                        }>$ USD</div>
                        <div onClick={()=>
                            {this.props.setGBP()
                            this.props.clearCartSum()
                            this.props.cartItems.map(
                                product => product.productProperties.prices.map(
                                    item => item.currency === "GBP" && this.addInCartSum(item.amount,product.productAmount)))
                        }
                        }>£ GBP</div>
                        <div onClick={()=>
                            {this.props.setJPY()
                            this.props.clearCartSum()
                            this.props.cartItems.map(
                                product => product.productProperties.prices.map(
                                    item => item.currency === "JPY" && this.addInCartSum(item.amount,product.productAmount)))
                        }
                        }>¥ JPY</div>
                        <div onClick={()=>
                            {this.props.setAUD()
                            this.props.clearCartSum()
                            this.props.cartItems.map(
                                product => product.productProperties.prices.map(
                                    item => item.currency === "AUD" && this.addInCartSum(item.amount,product.productAmount)))
                        }
                        }>$ AUD</div>
                        <div onClick={()=>
                            {this.props.setRUB()
                            this.props.clearCartSum()
                            this.props.cartItems.map(
                                product => product.productProperties.prices.map(
                                    item => item.currency === "RUB" && this.addInCartSum(item.amount,product.productAmount)))
                        }
                        }>₽ RUB</div>
                     </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isActiveCurrency: state.currencyReducer.isActiveCurrency,
        cartSum: state.cartReducer.cartSum,
        cartItems: state.cartReducer.cartItems,
    }
}
export const Currency = connect(mapStateToProps, {
    deactivateCurrency,
    setUSD,
    setGBP,
    setJPY,
    setRUB,
    setAUD,
    clearCartSum,
    addToSum
})(CurrencyBar)