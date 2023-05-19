import TodoPage from './components/TodoPage';
import NavBar from './components/TheNavbar';
import HomePage from './components/HomePage';
import StatPage from './components/StatPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import React from "react";


// src/App.js
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/stats' element={<StatPage/>}/>
            <Route path="/todo" element={<TodoPage/>}/> 
         </Routes>
      </Router>

export default App;