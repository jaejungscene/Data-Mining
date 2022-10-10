import "antd/dist/antd.css";
import React from "react";
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import {MainPage} from './main';
import {KoreanBookPage} from './korean';
import {ForeignBookPage} from './foreign';
import {PaperPage} from './paper';

function App() {
  return (
      <Switch>
        <Route exact={true} path="/">
          <MainPage/>
        </Route>
        <Route exact={true} path="/korean">
          <KoreanBookPage/>
        </Route>
        <Route exact={true} path="/foreign">
          <ForeignBookPage/>
        </Route>
        <Route exact={true} path="/paper">
          <PaperPage/>
        </Route>
      </Switch>
  );
}

export default App;
