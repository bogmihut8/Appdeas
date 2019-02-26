const initState = {
  projects: [
    {id: '1', title: 'first title', content: 'this is just some basic words for the content of this project heh'},
    {id: '2', title: 'second title', content: 'this is just some basic words for the content of this project heh'},
    {id: '3', title: 'third title', content: 'this is just some basic words for the content of this project heh'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log("created", action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.error("error when creating a project: ", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;