import "antd/dist/antd.css";
import React from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import {MainPage} from './main';
import {KoreanBookPage} from './korean';
import { RecommendPage } from "./recommend";
import {ForeignBookPage} from './foreign';

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
        <Route exact={true} path="/recommend">
          <RecommendPage/>
        </Route>
      </Switch>
  );
}

export default App;
