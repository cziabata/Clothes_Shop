import React from "react";
import styles from "./App.module.scss";
import { ProductListingPage } from "./PLP/ProductListingPage";
import PDP from "./PDP/ProductDescriptionPage";
import Header from "./Header/Header";

const Content = () => {
  return(
    <main className={styles.content}>
       <ProductListingPage />
       <PDP />
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
