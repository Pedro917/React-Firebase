import {React, useState} from 'react';
import Routes from './Routes';
import { FaBars } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"

import './assets/css/components/header.css'

function App() {
  const [showSide, setShowSide] = useState(true)
  return (
    <div>    
      <header className="cabecalho">
        {showSide? <FaTimes onClick={() => setShowSide(!showSide)}/> : <FaBars onClick={() => setShowSide(!showSide)}/>}
        <h2>Sistema de Feedback</h2>
      </header>   
      <div className={ showSide ? 'main-active' : 'main'}>
        <Routes show={showSide}/>
      </div>
    </div>
  );
}

export default App;
