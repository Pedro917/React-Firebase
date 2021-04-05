import React, { Component } from "react";

import { GiHamburgerMenu } from "react-icons/gi"

import '../assets/css/components/header.css'

class Header extends Component {
    constructor(){
        super()
        this.state = {
            options: {}
        }
    }

    render(){
        return (
            <header className="cabecalho">
                <GiHamburgerMenu />
                <h2>Sistema de Feedback</h2>
            </header>
        )
    }
}

export default Header
