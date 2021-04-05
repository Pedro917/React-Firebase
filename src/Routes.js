import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom"

import Login from './views/Login/Login'
import DashBoard from './views/Dashboard'
import Sidebar from './components/Sidebar'
import Logomarca from './views/Logomarca'

class Routes extends Component {
    constructor(props){
        super(props)
        this.firebase = "Aqui vai o firebase"
    }

    render(){
        return(
            <Router>
                <Sidebar show={this.props.show}/>   
                <Switch>
                    <Route exact path='/' component={DashBoard} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/logomarca' component={Logomarca} />
                    <Redirect from='*' to='/' />
                </Switch>
            </Router>
        )
    }
}


export default Routes