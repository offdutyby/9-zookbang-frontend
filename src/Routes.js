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
// import SearchBarInMain from "./SearchBarInMain";
// import SearchBarInMain from "pages/Main/SearchBarInMain";
// import Footer from "./Components/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/" component={SearchBarInMain} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/kakaoLogin" component={KakaoLogin} />
          <Route exact path="/EmailLogin" component={EmailLogin} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Auth" component={Auth} />
          {/* <Route exact path="/Footer" component={Footer} /> */}
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
