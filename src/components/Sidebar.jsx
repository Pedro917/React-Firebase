import React from "react";
import { Link } from 'react-router-dom'
import {GiChart} from 'react-icons/gi'
import {BsImage} from 'react-icons/bs'
import {FaInfoCircle} from 'react-icons/fa'

import '../assets/css/components/sidebar.css'

const Sidebar = ({show}) => {
    return (
        <div className={show ? 'side-nav active' : 'side-nav'}>
            <ul>
                <li><Link to="/"><GiChart /> Dashboard</Link></li>
                <li><Link to="/logomarca"><BsImage /> Logomarca</Link></li>
                <li><Link><FaInfoCircle /> About</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
