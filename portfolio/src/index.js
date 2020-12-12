import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import "antd/dist/antd.css";

// routes/pages will go here in the future
import { LandingPage } from "./components/pages/Landing";
import { config } from "./oktaConfig.js";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push("/login");
  };
  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/home" component={LandingPage} />
      </Switch>
    </Security>
  );
}
