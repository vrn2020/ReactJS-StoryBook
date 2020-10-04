import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
    return(
        <div className="card z-path-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">
                        {project.title}
                    </span>
                    <p>{project.description}</p>
                    <p>
                        Posted by the {project.authorFirstName} {project.authorLastName}
                    </p>
                    <p className="grey-text">
                        {moment(project.createdAt.toDate()).calendar()}
                    </p>
                </div>
            </div>
    )
}

export default ProjectSummary;