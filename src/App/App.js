import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";
import Layout from "./containers/Layout/Layout";

function App() {

    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path='/' component={Layout}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
