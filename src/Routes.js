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
import EmailLogin from "Pages/EmailLogin";
import Auth from "Pages/Auth";
import Officetel from "Pages/Officetel";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/" component={SearchBarInMain} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/kakaoLogin" component={KakaoLogin} />
          <Route exact path="/emailLogin" component={EmailLogin} />
          <Route exact path="/auth" component={Auth} />
          {/* <Route exact path="/Footer" component={Footer} /> */}
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/map" component={Officetel} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
