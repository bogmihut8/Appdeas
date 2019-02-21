export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async call to create project
    
    
    //dispatch action
    dispatch({type: 'CREATE_PROJECT', project});
  }
};