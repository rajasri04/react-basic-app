/** @format */

import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import University from "./pages/University.js";
import College from "./pages/College.js";
import Student from "./pages/Student.js";

const MainPage = () => {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/student' Component={Student} />
            <Route path='/college' Component={College} />
            <Route path='/university' Component={University} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};
export default MainPage;
