import React from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
    const {story,auth} = props;
    if(!auth.uid) return <Redirect to='/signin' />
    if(story){
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                <span className="card-title">{story.title}</span>
                        <p>{story.description}</p>    
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by the {story.authorFirstName} {story.authorLastName}</div>
                        <div>{moment(story.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
        
    } else {
        return (
            <div>
            <p>Loading Project...</p>     
            </div>
        )
    }
    
}

const mapStatetoProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const stories = state.firestore.data.Stories;
    const story = stories ? stories[id] : null;
    return {
        story:story,
        auth:state.firebase.auth
    }
}
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection:'Stories'}
    ])
)(ProjectDetails);
