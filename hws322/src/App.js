import React, { Component,useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import DocHome from "./components/dochome";

function App() {

  const [ user, setLoginUser] = useState({})
    return (
      <div>
        <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <DocHome setLoginUser={setLoginUser} /> : <Home setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
           <Route path="/dochome">
            <DocHome setLoginUser={setLoginUser}/>
          </Route>
        </Switch>
      </Router>
      </div>
    );
  }


export default App;
