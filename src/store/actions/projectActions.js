export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async call to create project
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: "Bogdan",
      authorLastName: "Mihut",
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      //dispatch action
      dispatch({type: 'CREATE_PROJECT', project});
    }).catch((error) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', error});
    });
  }
};