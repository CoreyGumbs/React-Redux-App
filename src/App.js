import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashPage from './components/SplashPage/SplashPage';


function App() {
  return (
    <div className='App'>
    <Switch>
      <Route exact path="/" component={SplashPage} />
    </Switch>
    </div>
  );
}

export default App;
