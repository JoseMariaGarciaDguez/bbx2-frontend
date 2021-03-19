import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import AppBar from '../AppBar/AppBar';

import { Provider } from 'react-redux';
import store from '../../store/store';

function App() {
  /*const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }*/
      return (

          <Provider store={store}>
            <AppBar />
            <div className="wrapper">
              <BrowserRouter>
                <Switch>
                  <Route path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route path="/Preferences">
                    <Preferences />
                  </Route>
                </Switch>
              </BrowserRouter>
            </div>
          </Provider>

      );
    }




export default App;
