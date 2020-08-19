import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import login from './pages/login/login';
import dashboard from './pages/dashboard/dashboard';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact  path="/" component={dashboard} />
                    <Route exact path="/login" component={login}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App;