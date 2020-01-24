import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashPage from './components/SplashPage/SplashPage';
import Loader from './components/Loader/Loader';

import './css/styles.css';

import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className='App'>
    <Switch>
      <Route path = "/loader" component={Loader} />
      <Route path = "/home" component={MainPage} />
      <Route exact path = "/" component={SplashPage} />
    </Switch>
    </div>
  );
}

export default App;
