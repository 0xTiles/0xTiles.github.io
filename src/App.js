// modules
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// src
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// static
import './App.css';
import './markdown.css';

function App() {
  return <React.Fragment>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
  </React.Fragment>
}

export default App;
