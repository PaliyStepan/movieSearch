import React from 'react';
import {Route} from "react-router-dom";
import './App.scss';

import Landing from "./components/home/Landing";
import Movie from "./components/home/Movie";

const App = () => {
    return (
    <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/movie/:id" component={Movie} />
                </div>
            </div>
        </div>
    </div>
    );
};


export default App;
