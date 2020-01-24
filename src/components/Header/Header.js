import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

const Header = (props) => { 

    return(
        <header>
            <div className="header-container">
                <div className="header-log-container">
                    <img className="header-logo" src={props.logo} alt={props.logoTxt}/>
                </div>
                <div className="header-link">
                    <NavLink to="/">
                        Home
                    </NavLink> 
                    <NavLink to="/about">
                       About
                    </NavLink>  
                    <NavLink to="/history">
                        History
                    </NavLink>    
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = (state) =>{
    return{
        logo: state.splash.logo,
        logoTxt: state.splash.logoTxt
    }
}

export default withRouter(connect(mapStateToProps, {})(Header));