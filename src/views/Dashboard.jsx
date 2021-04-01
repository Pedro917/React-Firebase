import React, { Component } from "react";
import { withRouter } from "react-router";

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            options: {}
        }
    }

    render(){
        return (
            <div>
                oi mundo
            </div>
        )
    }
}

export default withRouter(Dashboard)
