import React from 'react';

import ShoppingList from "./containers/ShoppingList/ShoppingList";
import Footer from "./components/Footer/Footer";

import './App.css'

function App() {
    return (
        <div className='pageWrapper'>
            <div className="contentWrapper">
                <ShoppingList />
            </div >
            <Footer />
        </div >
    );
}

export default App;
