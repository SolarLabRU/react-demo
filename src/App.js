import React, {Component} from 'react';
import './App.css';
import {Route, Router, Switch} from "react-router-dom";
import Home from "./containers/home";
import Login from "./containers/login";
import history from "./utils/history";
import PrivateRoute from "./containers/private-route";

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="" component={Home}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
