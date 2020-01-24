import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/spacex-logo.png';

const SplashPage = () => {
    return(
        <div className="splash-page-container">
            <img src={logo} alt="spacex logo"/>
            <h1 className="splash-page-heading">
                Discovery
            </h1>
         
            <button className="splash-page-btn">
                Launch
            </button>
        </div>
    )
};

export default SplashPage;