import "antd/dist/antd.css";
import React from "react";
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import {MainPage} from './main/index.js';

function App() {
  return (
    <MainPage/>
  );
}

export default App;
