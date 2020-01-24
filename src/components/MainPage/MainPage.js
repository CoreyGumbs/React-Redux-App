import React from 'react';
import {connect} from 'react-redux';


const MainPage = (props) => {
    return( 
        <main className="container">

           <h1>MAIN PAGE</h1>
        
        </main>
    )
}

const mapStateToProps = state => {
    return{
        isLoading: state.state.isLoading,
        data: state.state.data,
        errors: state.state.errors
    }
}

export default connect(mapStateToProps, {})(MainPage);