import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom"

import Login from './views/Login/Login'
import DashBoard from './views/Dashboard'

class Routes extends Component {
    constructor(){
        super()
        this.firebase = "Aqui vai o firebase"
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={DashBoard} />
                    <Redirect from='*' to='/' />
                </Switch>
            </Router>
        )
    }
}


export default Routes