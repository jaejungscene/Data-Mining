import "antd/dist/antd.css";
import React from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import {MainPage} from './main';
import {KoreanBookPage} from './korean';
import { RecommendPage } from "./recommend";
// import {KoreanBookRecPage} from './korean/recommend';
import {ForeignBookPage} from './foreign';
// import {ForeignBookRecPage} from './foreign/recommend';
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
        {/* <Route exact={true} path="/korean/recommend">
          <KoreanBookRecPage/>
        </Route> */}
        <Route exact={true} path="/foreign">
          <ForeignBookPage/>
        </Route>
        {/* <Route exact={true} path="/foreign/recommend">
          <ForeignBookRecPage/>
        </Route> */}
        <Route exact={true} path="/recommend">
          <RecommendPage/>
        </Route>
        <Route exact={true} path="/paper">
          <PaperPage/>
        </Route>
      </Switch>
  );
}

export default App;
