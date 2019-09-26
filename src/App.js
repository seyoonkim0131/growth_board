import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
      <Router>
          <div>
              <Switch>
                  {/* <Route path="/" component={Home}></Route> */}
                  <Route path="/login" component={Login}></Route>
                  {/* <Route path="/join" component={Join}></Route> */}
                  {/* <Route path="/create" component={Create}></Route> */}
                  {/* <Route path="/update" component={Update}></Route> */}
                  {/* <Route path="/read" component={Read}></Route> */}
                  {/* <Route path="/list" component={List}></Route> */}
              </Switch>
          </div>
      </Router>
  );
}

export default App;
