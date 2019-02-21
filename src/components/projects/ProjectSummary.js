import React from 'react'

const ProjectSummary = ({project}) => {
  return (
      <div className="card project-summary">
        <div className="card-content text-darked-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by Bogdan Mihut</p>
          <p className="grey-text">3rd Faburary, 3am</p>
        </div>
      </div>
  );
};

export default ProjectSummary;