import React from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { toggleSplash } from '../../actions/toggleSplash';
import './css/splash.css';

const SplashPage = (props) => {
    
    return(
        <div className="splash-page-container">
            <img className="splash-logo" src={props.logo} alt="spacex logo"/>
            <h1 className="splash-page-heading">
                Discovery
            </h1>
            <Link to='/home'>
                <button className="splash-page-btn" onClick={props.toggleSplash}>
                    Launch
                </button>
            </Link>
        </div>
    )
};

const mapStateToProps = (state) => {

    return {
        logo: state.splash.logo
    }
}

export default withRouter(connect(mapStateToProps, {toggleSplash})(SplashPage));