import React from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { connect } from "react-redux";
import { deactivateCurrency } from "../../Redux/currencyReducer";

class CurrencyBar extends React.Component {
    debugger
    render() {
        return(
            <>
                <div className={cn(styles.modal, {[styles.active]: this.props.isActiveCurrency})} 
                 onClick={this.props.deactivateCurrency}
                >
                     <div className={styles.currencyContent} onClick={e=>e.stopPropagation()}>
                        2
                     </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    debugger
    return {
        isActiveCurrency: state.currencyReducer.isActiveCurrency
    }
}
debugger
export const Currency = connect(mapStateToProps, {deactivateCurrency})(CurrencyBar)
debugger