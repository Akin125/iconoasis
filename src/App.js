import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import SignUp from "./component/SignUp/SignUp";
import Login from "./component/Login/Login";

function App() {

  return (
      <Router>
          <Routes>
              <Route exact  path ="/" element={<Home/>} />
              <Route exact  path ="/signup" element={<SignUp/>} />
              <Route exact  path ="/login" element={<Login/>} />
          </Routes>
      </Router>
  );
}

export default App;
