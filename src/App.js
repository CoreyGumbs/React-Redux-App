import React, {useEffect} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {connect } from 'react-redux';
import Loader from 'react-loader-spinner'

import {fetchData}  from './actions';

import Header from  './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import History from './components/History/History';

import './css/styles.css';

function App(props) {

  useEffect(()=>{
    const body = document.querySelector('body');
    console.log(body);
    body.onload = props.fetchData;
  });

  console.log(props);
  return (
    <div className='App'>
      {props.isLoading && 
      <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} //3 secs
      />
      }

      {!props.isLoading && !props.data && 
        <>
          <Header />
          <Switch>
          <Route path = "/about" component={About} />
          <Route path = "/history" component={History} />
          <Route path = "/" component={MainPage} />
          {/* <Route exact path = "/" component={SplashPage} /> */}
          </Switch>
        </>
      }    
    </div>
  );
}

const mapStateToProps =  state => {
  return{
    isLoading: state.state.isLoading,
    data: state.state.data
  }
}

export default withRouter(connect(mapStateToProps, {fetchData})(App));
