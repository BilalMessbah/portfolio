import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Index from "./components/index";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
    <div className="App">
      <Route path="/" exact component={Index}/>
    </div>
    </Router>
  );
}

export default App;