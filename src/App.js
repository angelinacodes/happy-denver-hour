import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createBar, updateBar } from "./graphql/mutations";
import { listBars } from "./graphql/queries";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";

import HomePage from "./components/homepage.jsx";

import "./App.css";

function App() {
  const [bars, setBars] = React.useState();

  React.useEffect(() => {
    (async () => {
      const apiBars = await API.graphql(graphqlOperation(listBars));
      setBars(apiBars.data.listBars.items);
    })();
  }, []);
  console.log("BARS", bars);

  return (
    <Router>
      <div className="App">
        <header className="header">
          <Link to="/" className="title">
            <h1>HAPPY DENVER HOUR</h1>
          </Link>
        </header>
        {/* <HomePage /> */}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
