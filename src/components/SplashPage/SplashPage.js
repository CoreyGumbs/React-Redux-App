import React from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import {fetchData}  from '../../actions';
// import { toggleSplash } from '../../actions/toggleSplash';
import './css/splash.css';

const SplashPage = (props) => {
    console.log(props);
    return(
        <div className="splash-page-container">
            <img className="splash-logo" src={props.logo} alt="spacex logo"/>
            <h1 className="splash-page-heading">
                Discovery
            </h1>
            <Link to='/home'>
                <button className="splash-page-btn" onClick={props.fetchData}>
                    Launch
                </button>
            </Link>
        </div>
    )
};

const mapStateToProps = (state) => {

    return {
        logo: state.splash.logo,
        isLoading: state.state.isLoading
    }
}

export default withRouter(connect(mapStateToProps, {fetchData})(SplashPage));