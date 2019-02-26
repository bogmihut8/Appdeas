import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title with id: {id}</span>
          <p>Lorem ipsum text bla bla bla </p>
        </div>
        
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Bogdan Mihut</div>
          <div>5th February, 8PM</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)