import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Customers from './pages/customers'
import Staffs from './pages/staffs'
import Orders from './pages/orders'
import Services from './pages/services'
import Home from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/customers'  element={<Customers />}></Route>
          <Route path='/staffs'  element={<Staffs />}></Route>
          <Route path='/orders'  element={<Orders />}></Route>
          <Route path='/services'  element={<Services />}></Route>
      </Routes>
    </Router>
  );
}

export default App;