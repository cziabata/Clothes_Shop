import React from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { connect } from "react-redux";
import { deactivateCurrency, setUSD, setGBP, setJPY, setAUD, setRUB } from "../../Redux/currencyReducer";
import { clearCartSum, addToSum } from "../../Redux/cartReducer";

class CurrencyBar extends React.Component {
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
                            debugger
                            this.props.cartItems.map(product => product.productProperties.prices.map(item => item.currency === "USD" && this.props.addToSum(item.amount)))
                            debugger
                        }
                        }>$ USD</div>
                        <div onClick={this.props.setGBP}>£ GBP</div>
                        <div onClick={this.props.setJPY}>¥ JPY</div>
                        <div onClick={this.props.setAUD}>$ AUD</div>
                        <div onClick={this.props.setRUB}>₽ RUB</div>
                     </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    debugger
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