import React, { Profiler } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions'

const SingedInLinks = (props) =>{
    
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Story</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">
                {props.profile.intials}
                </NavLink></li>
        </ul>
    )
}

const mapStateToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapStateToProps)(SingedInLinks);