const projects = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PROJECTS': {
      return { ...action.data };
    }
    default:
      return state;
  }
};

export default projects;
