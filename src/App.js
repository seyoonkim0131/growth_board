import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import List from "./List";

function App() {
  return (
      <Router>
          <div>
              <Switch>
                  {/* <Route exact path="/" component={Home}></Route> */}
                  <Route path="/login" component={Login}></Route>
                  {/* <Route path="/join" component={Join}></Route> */}
                  {/* <Route path="/create/:id" component={Create}></Route> */}
                  {/* <Route path="/update/:boardId" component={Update}></Route> */}
                  {/* <Route path="/read/:boardId" component={Read}></Route> */}
                  <Route path="/list" component={List}></Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
