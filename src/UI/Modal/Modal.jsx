import React from "react";
import styles from "./Modal.module.scss";

export class Modal extends React.Component {
    render() {
        return(
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    1
                </div>
            </div>
        )
    }
}