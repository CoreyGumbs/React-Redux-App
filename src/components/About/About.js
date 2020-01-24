import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

const About = (props) => {
    return(
        <div className="container">
            {props.isLoading && 
                <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} //3 secs
                />
            }
            {!props.isLoading && 
                <>
                    <div className="about-heading-container">
                        <h1>About {props.data.name} </h1>
                    </div>
                    <div className="about-founded-container">
                        <h2>Founded By {props.data.founder}</h2>
                        <h3>Date Founded: {props.data.founded}</h3>
                    </div>
                    <div className="about-summary-container">
                        <p className="about-txt">
                            {props.data.summary}
                        </p>
                    </div>
                    <div className="company-officers-container">
                        <h2>Company Officers</h2>
                        <h3>{props.data.ceo} - CEO</h3>
                        <h3>{props.data.cto} - CTO</h3>
                        <h3>{props.data.coo} - COO</h3>
                        <h3>{props.data.cto_propulsion} - CTO Propulsion</h3>
                    </div>
                    <div className="company-stats-container">
                        <h2>Company Statistics</h2>
                        <p className="about-txt">
                            SpaceX currently has {props.data.employees} employess.
                        </p>
                        <p className="about-txt">
                            SpaceX currently has {props.data.launch_sites} launch sites & 1 {props.data.test_sites} site.
                        </p>
                        <p className="about-txt">
                            SpaceX current valuation is ${props.data.valuation}.
                        </p>
                    </div>
                </>
            }
            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        data: state.state.data.about
    }
}
export default connect(mapStateToProps, {})(About);