// modules
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

// src
import Home from "./pages/Home";

// media

// css
import './App.css';
import './markdown.css';

function App() {
  return <React.Fragment>
      <Router>
        <Home/>
      </Router>
  </React.Fragment>
}

export default App;
