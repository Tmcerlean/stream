import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../features/userSlice';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { auth } from '../firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    })

    return () => {
      unsubscribe();
    }

  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
      <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
      </Switch>
      )}
    </Router>
  );
}

export default App;