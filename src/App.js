import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import cultilabs from './img/cultilabs-green-w922.png';
import kist from './img/kist.png';

import Login from "./Login";
import List from "./List";
import Create from "./Create";
import Read from "./Read";

const LogoContainer = styled.div`max-height: 100px; min-height: 90px; margin: 40px 0; padding: 0; text-align: center;`;
const Logo = styled.img`height: 72px; margin: 0 20px;`;

function App() {
  return (
      <Router>
            <LogoContainer>
                <Logo src={cultilabs}></Logo>
                <Logo src={kist}></Logo>
            </LogoContainer>
          <div>
              <Switch>
                  {/* <Route exact path="/" component={Home}></Route> */}
                  <Route path="/login" component={Login}></Route>
                  {/* <Route path="/join" component={Join}></Route> */}
                  {/* <Route path="/create/:id" component={Create}></Route> */}
                  <Route path="/create" component={Create}></Route>
                  {/* <Route path="/update/:boardId" component={Update}></Route> */}
                  <Route path="/read" component={Read}></Route>
                  {/* <Route path="/read/:boardId" component={Read}></Route> */}
                  <Route path="/list" component={List}></Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
