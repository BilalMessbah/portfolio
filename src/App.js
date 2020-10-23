import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BrowserRouter from 'react-router-dom/BrowserRouter';
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';

import Index from "./components/index";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <Router>
      {/* <Navbar/> */}
    <div className="App">
      <Route exact path="/portfolio/" exact component={Index}/>
    </div>
    </Router>
   </BrowserRouter>
  );
}

export default App;