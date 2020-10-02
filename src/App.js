import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter , Route} from "react-router-dom";
import './App.scss';

import Landing from "./components/home/Landing";
import store from "./redux/store";
import Movie from "./components/home/Movie";

class App extends React.Component {
  render() {
    return (
        <Provider store={store} >
            <BrowserRouter>
                <div className="App">
                    <div className="container">
                      <Route exact path="/" component={Landing} />
                      <Route exact path="/movie/:id" component={Movie} />
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}




export default App;
