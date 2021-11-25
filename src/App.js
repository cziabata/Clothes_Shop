import React from "react";
import styles from "./App.module.scss";
import { ProductListingPage } from "./UI/PLP/ProductListingPage";
import Header from "./UI/Header/Header";

const Content = () => {
  return(
    <main className={styles.content}>
       <ProductListingPage />
    </main>
  )
}
function App() {
  return (
    <div className={styles.app}>
       <Header />
       <Content />
    </div>
  );
}

export default App;
