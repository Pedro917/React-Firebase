import React, { Component } from "react";
import { withRouter } from "react-router";

class Login extends Component {
    constructor(){
        super()
        this.state = {
            options: {}
        }
    }

    render(){
        return (
            <div>
                Login
            </div>
        )
    }
}

export default withRouter(Login)