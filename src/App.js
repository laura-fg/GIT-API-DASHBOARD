
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/menu.css';
import './App.css';
import { NavLink, Router } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { createBrowserHistory } from "history";
import Menu from './pages/menu';
import Login from './pages/Login/login';

const customHistory = createBrowserHistory();



function App() {


  return (
    <div className="App">
      <Menu/>
      <Login/>
     
          
    </div>
  );
}

export default App;
