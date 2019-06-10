import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.scss';
import Layout from './containers/Layout/Layout';

const App = () => {
    return (
        <BrowserRouter>
            <div className="container-fluid" data-test='appComponent'>
                <Route path='/' component={Layout}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
