import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import Home from '../screens/Home';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;