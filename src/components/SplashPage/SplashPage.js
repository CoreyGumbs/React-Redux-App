import React from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './css/splash.css';

const SplashPage = (props) => {
    console.log(props);
    return(
        <div className="splash-page-container">
            <img className="splash-logo" src={props.logo} alt="spacex logo"/>
            <h1 className="splash-page-heading">
                Discovery
            </h1>
            <Link to='/Home'>
                <button className="splash-page-btn">
                    Launch
                </button>
            </Link>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        logo: state.splash.logo
    }
}

export default withRouter(connect(mapStateToProps, {})(SplashPage));