import React from 'react';

import ShoppingList from "./containers/ShoppingList/ShoppingList";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
    return (
        <div className="container-fluid">
            <ShoppingList/>
            <Footer/>
        </div>
    );
}

export default App;
