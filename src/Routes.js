import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "Pages/Main";
import Login from "Pages/Login";
import SignUp from "Pages/SignUp";
import KakaoLogin from "Pages/KakaoLogin";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/kakaoLogin" componentn={KakaoLogin} />
          <Route exact path="/signup" component={SignUp} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
