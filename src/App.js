import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashPage from './components/SplashPage/SplashPage';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <div className='App'>

    <Switch>
      <Route path ="/loader" component={Loader} />
      <Route exact path="/" component={SplashPage} />
    </Switch>
    </div>
  );
}

export default App;
