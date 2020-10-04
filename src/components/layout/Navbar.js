import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SingedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';


const Navbar = (props) => {
    const {auth, profile} = props;
    //console.log(profile);
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SingedOutLinks />;
    return (
        <nav className="mav-wrapper grey darken-3">
            <div className="container">
               <Link to='/' className="brand-logo" title="StoryBook">
                 StoryBook
               </Link> 
               {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);