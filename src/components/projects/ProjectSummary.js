import React from 'react'
import {Link} from 'react-router-dom'

const ProjectSummary = ({project}) => {
  return (
      <div className="card">
				<div className="card-header">
					<h2 className="card-title"><i className="material-icons">lightbulb_outline</i>{project.title}</h2>
					<a href="#" className="pull-right"></a>
				</div>
				<div className="card-inner">
					<hr />
					<div className="card-main">
						{project.content}
					</div>
					<hr/>
					<div className="card-footer">
            <p className="grey-text"> 
                <i className="material-icons">access_time</i> 23rd February, 3:00 AM
              <Link to={'/project/' + project.id}>
							  VIEW PROJECT
						  </Link>
						</p>
					</div>
				</div>
      </div>
  );
};

export default ProjectSummary;