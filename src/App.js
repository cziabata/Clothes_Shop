import React from "react";
import "./App.css";
import { ProductListingPage } from "./PLP/ProductListingPage";
import PDP from "./PDP/ProductDescriptionPage";

function App() {
  return (
    <div className="App">
        <ProductListingPage />
        <PDP />
    </div>
  );
}

export default App;
